import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomInt } from 'crypto';
import { EmailService } from 'src/email/email.service';
import { SendTicketEmailParams } from 'types/ticket-mail';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { randomUUID } from 'crypto';

@Injectable()
export class TicketService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: EmailService,
    private readonly httpService: HttpService,
  ) {}

  async getAll(userID: string): Promise<any> {
    try {
      const company = await this.prisma.user.findUnique({
        where: { id: userID },
        include: {
          company: true,
        },
      });

      if (!company)
        return {
          success: false,
          message: 'Utilizador não encontrado',
        };

      const tickets = await this.prisma.ticket.findMany({
        include: {
          event: true,
          ticketType: true,
        },
        where: {
          event: {
            companyId: company.company.id, // Fixed: changed from company.id to company.company.id
          },
        },
      });
      return tickets;
    } catch (error) {
      throw new Error(`Erro ao buscar bilhetes: ${error.message}`);
    }
  }

  async getAllTicketType(userID: string): Promise<any> {
    try {
      const company = await this.prisma.user.findUnique({
        where: { id: userID },
        include: {
          company: true,
        },
      });

      if (!company)
        return {
          success: false,
          message: 'Utilizador não encontrado',
        };

      const ticketTypes = await this.prisma.ticketType.findMany({
        include: {
          ticket: {
            include: {
              event: true,
            },
          },
        },
        where: {
          ticket: {
            event: {
              companyId: company.company.id, // Fixed: changed from company.id to company.company.id
            },
          },
        },
      });
      return ticketTypes;
    } catch (error) {
      throw new Error(`Erro ao buscar tipos de bilhetes: ${error.message}`);
    }
  }

  async deleteAll(): Promise<any> {
    try {
      const resp1 = await this.prisma.ticketType.deleteMany();
      const resp2 = await this.prisma.ticket.deleteMany();

      return {
        success: true,
        data: resp2,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao eliminar registos',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

async buyTicket(data: any): Promise<any> {
  try {
    const eventData = await this.prisma.event.findFirst({
      where: { id: String(data.eventId) },
      include: {
        company: true,
        ticket: {
          include: {
            ticketType: true,
          },
        },
      },
    });

    if (!eventData) {
      return {
        success: false,
        message: 'Nenhum evento encontrado',
      };
    }

    // Find ticket types by name/type instead of assuming array positions
    const vipTicketType = eventData.ticket.ticketType.find(
      (tt) => tt.name?.toLowerCase().includes('vip') || tt.name?.toLowerCase().includes('vip')
    );
    const normalTicketType = eventData.ticket.ticketType.find(
      (tt) => tt.name?.toLowerCase().includes('normal') || tt.name?.toLowerCase().includes('normal')
    );

    let resposta = [];

    // Process normal tickets
    if (data.normal_ticket > 0) {
      if (!normalTicketType) {
        return {
          success: false,
          message: 'Tipo de bilhete normal não encontrado',
        };
      }

      // Check availability
      if (normalTicketType.quantity < data.normal_ticket) {
        return {
          success: false,
          message: 'Não há bilhetes normais suficientes disponíveis',
        };
      }

      for (let i = 0; i < data.normal_ticket; i++) {
        const normal = await this.prisma.salesTickets.create({
          data: {
            qrCode: randomUUID(), // Generate unique QR code
            paymentMethod: String(data.payment_method || 'default'),
            tiketType: {
              connect: { id: String(normalTicketType.id) },
            },
            user: {
              connect: { id: String(data.user_id) },
            },
            company: {
              connect: { id: String(eventData.companyId) },
            },
          },
        });

        resposta.push({
          type: 'Normal',
          ...normal,
        });
      }

      // Update ticket quantity once after all tickets are created
      await this.prisma.ticketType.update({
        where: { id: String(normalTicketType.id) },
        data: { quantity: { decrement: data.normal_ticket } },
      });
    }

    // Process VIP tickets
    if (data.vip_ticket > 0) {
      if (!vipTicketType) {
        return {
          success: false,
          message: 'Tipo de bilhete VIP não encontrado',
        };
      }

      // Check availability
      if (vipTicketType.quantity < data.vip_ticket) {
        return {
          success: false,
          message: 'Não há bilhetes VIP suficientes disponíveis',
        };
      }

      for (let i = 0; i < data.vip_ticket; i++) {
        const vip = await this.prisma.salesTickets.create({
          data: {
            qrCode: randomUUID(), // Generate unique QR code
            paymentMethod: String(data.payment_method || 'default'),
            tiketType: {
              connect: { id: String(vipTicketType.id) },
            },
            user: {
              connect: { id: String(data.user_id) },
            },
            company: {
              connect: { id: String(eventData.companyId) }, // Added missing company connection
            },
          },
        });

        resposta.push({
          type: 'VIP',
          ...vip,
        });
      }

      // Update ticket quantity once after all tickets are created
      await this.prisma.ticketType.update({
        where: { id: String(vipTicketType.id) },
        data: { quantity: { decrement: data.vip_ticket } },
      });
    }

    const user = await this.prisma.user.findFirst({
      where: { id: String(data.user_id) },
      include: {
        company: true,
      },
    });

    if (!user) {
      return {
        success: false,
        message: 'Nenhum utilizador encontrado',
      };
    }

    const params: SendTicketEmailParams = {
      email: user.email,
      eventDate: eventData.event_date,
      eventLocation: eventData.location,
      eventName: eventData.title || ' - ',
      organizationName: eventData.company.name || ' - ',
      supportPhone: eventData.company.phone_number || ' - ',
      tickets: resposta.map((t) => ({
        id: String(t.id), // Ensure ID is string
        ticketUrl: "http://ticket-moz-seven.vercel.app/my-ticket/${t.id}",
        type: String(t.type),
      })),
      userName: user.name.toUpperCase() || ' - ',
      websiteUrl: 'http://ticket-moz-seven.vercel.app',
      socialMediaLinks: '',
    };

    await this.mailService.sendTickets(params);

    return {
      success: true,
      data: resposta,
    };
  } catch (error) {
    console.error('Error in buyTicket:', error);
    throw new HttpException(
      'Erro ao processar requisição -> ' + error.message,
      HttpStatus.BAD_REQUEST,
    );
  }
}

  async getSaledTicketById(id: string): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.findFirst({
        where: { id: id },
        include: {
          tiketType: {
            include: {
              ticket: {
                include: {
                  event: {
                    include: {
                      company: true,
                    },
                  },
                },
              },
            },
          },
        },
      });

      return {
        success: true,
        data: resp,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async listCompanySales(userID: string): Promise<any> {
    try {
      // 1. Buscar o usuário e sua empresa
      const userWithCompany = await this.prisma.user.findUnique({
        where: { id: userID },
        include: {
          company: true,
        },
      });

      if (!userWithCompany) {
        return {
          success: false,
          message: 'Utilizador não encontrado',
        };
      }

      if (!userWithCompany.company) {
        return {
          success: false,
          message: 'Utilizador não está associado a nenhuma empresa',
        };
      }

      // 2. Buscar todas as vendas da empresa do promotor (incluindo verificação de null)
      const sales = await this.prisma.salesTickets.findMany({
        where: {
          companyID: userWithCompany.company.id,
        },
        include: {
          user: true,
          tiketType: {
            include: {
              ticket: {
                include: {
                  event: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      if (sales.length === 0) {
        return {
          success: true,
          data: [],
          message: 'Nenhuma venda encontrada para esta empresa',
        };
      }

      return {
        success: true,
        data: sales,
        message: 'Vendas da empresa listadas com sucesso',
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisição: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async listAllSales(): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.findMany({
        include: {
          user: true,
          company: true,
          tiketType: {
            include: {
              ticket: {
                include: {
                  event: true,
                },
              },
            },
          },
        },
      });

      if (resp.length == 0) {
        return {
          success: false,
          message: 'Nenhuma venda encontrada',
        };
      }

      return resp;
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteAllSales(): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.deleteMany();

      return resp;
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async pay(data: any) {
    const url = 'https://eticketsmz.site/etickets-gateway/api/v1/payments';

    const headers = {
      Authorization: process.env.NEST_PAY_AUTHORIZATION,
      'Content-Type': 'application/json',
    };

    const body = {
      amount: Number(data.amount) ?? 0,
      customer_phone: '258' + data.phone_number,
      external_transaction_id: `tr_${Date.now()}_${randomInt(1000, 9999)}`,
      description: 'Pagamento de bilhete',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, body, { headers, timeout: 60000 }),
      );

      if (!response || !response.data) {
        return {
          success: false,
          message: 'Erro ao realizar pagamento',
        };
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error(error?.response?.data || error.message);
      throw error;
    }
  }

  async paymentAlternative(data: any): Promise<any> {
    try {
      const url = 'http://64.23.143.176:8090/api/payments';

      const headers = {
        'X-API-KEY': process.env.NEST_X_API_KEY,
        'Content-Type': 'application/json',
      };

      const body = {
        amount: 10,
        currency: 'MZN',
        customerId: 'dasdasduugh23u12637gjkds',
        method: {
          type: 'MPESA',
          phone: '258845636664',
        },
      };

      const response = await firstValueFrom(
        this.httpService.post(url, body, { headers, timeout: 60000 }),
      );

      if (!response || !response.data) {
        return {
          success: false,
          message: 'Erro ao realizar pagamento',
        };
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async confirmPaymentAlternative(data: any): Promise<any> {
    try {
      if (!data?.paymentID) {
        throw new Error('ID de pagamento é obrigatório');
      }

      const url = `http://64.23.143.176:8090/api/payments/${data.paymentID}/confirm`;

      const headers = {
        'X-API-KEY': process.env.NEST_X_API_KEY,
        'Content-Type': 'application/json',
      };

      const response = await firstValueFrom(
        this.httpService.post(url, {}, { headers, timeout: 60000 }),
      );

      if (!response?.data) {
        throw new Error('Nenhum dado recebido do serviço de confirmação');
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Erro na confirmação:', error);
      throw new HttpException(
        error.response?.data?.message || 'Falha ao confirmar pagamento',
        error.response?.status || HttpStatus.BAD_REQUEST,
      );
    }
  }
}

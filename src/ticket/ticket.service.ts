import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomInt } from 'crypto';
import { EmailService } from 'src/email/email.service';
import { SendTicketEmailParams } from 'types/ticket-mail';
import axios from 'axios';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

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
          message: 'Utilizador nao encontra',
        };

      const tickets = await this.prisma.ticket.findMany({
        include: {
          event: true,
          ticketType: true,
        },
        where: {
          event: {
            companyId: company.id,
          },
        },
      });
      return tickets;
    } catch (error) {
      throw new Error(`Error fetching tickets: ${error.message}`);
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
          message: 'Utilizador nao encontra',
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
              companyId: company.id,
            },
          },
        },
      });
      return ticketTypes;
    } catch (error) {
      throw new Error(`Error fetching ticket types: ${error.message}`);
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
    } catch (error) {}
  }

  async buyTicket(data: any): Promise<any> {
    try {
      const eventData = await this.prisma.event.findFirst({
        where: { id: data.eventId },
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

      let resposta = [];

      if (data.normal_ticket > 0) {
        for (let i = 0; i < data.normal_ticket; i++) {
          const normalTicketType = eventData.ticket.ticketType[1];
          const normal = await this.prisma.salesTickets.create({
            data: {
              qrCode: '' + randomInt(1000),
              paymentMethod: data.payment_method || 'default',
              tiketType: {
                connect: { id: normalTicketType.id },
              },
              user: {
                connect: { id: data.user_id },
              },
            },
          });

          // Diminui a quantidade disponível do TicketType Normal
          await this.prisma.ticketType.update({
            where: { id: normalTicketType.id },
            data: { quantity: { decrement: 1 } },
          });

          resposta.push({
            type: 'Normal',
            ...normal,
          });
        }
      }

      if (data.vip_ticket > 0) {
        for (let i = 0; i < data.vip_ticket; i++) {
          const vipTicketType = eventData.ticket.ticketType[0];
          const vip = await this.prisma.salesTickets.create({
            data: {
              qrCode: '' + randomInt(1000),
              paymentMethod: data.payment_method || 'default',
              tiketType: {
                connect: { id: vipTicketType.id },
              },
              user: {
                connect: { id: data.user_id },
              },
            },
          });

          // Diminui a quantidade disponível do TicketType VIP
          await this.prisma.ticketType.update({
            where: { id: vipTicketType.id },
            data: { quantity: { decrement: 1 } },
          });

          resposta.push({
            type: 'VIP',
            ...vip,
          });
        }
      }

      const user = await this.prisma.user.findFirst({
        where: { id: data.user_id },
        include: {
          company: true,
        },
      });

      if (!user)
        return {
          success: false,
          message: 'nenhum utilizador encontrado',
        };

      const params: SendTicketEmailParams = {
        email: user.email,
        eventDate: eventData.event_date,
        eventLocation: eventData.location,
        eventName: eventData.title || ' - ',
        organizationName: eventData.company.name || ' - ',
        supportPhone: eventData.company.phone_number || ' - ',
        tickets: resposta.map((t) => ({
          id: t.id,
          ticketUrl: 'http://localhost:3000/my-ticket/' + t.id,
          type: t.type,
        })),
        userName: user.name.toUpperCase() || ' - ',
        websiteUrl: 'http://localhost:3000',
        socialMediaLinks: '',
      };

      await this.mailService.sendTickets(params);

      return {
        success: true,
        data: resposta,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getSaledTciketById(id: string): Promise<any> {
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
        'Erro ao processoar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async listSales(userID: string): Promise<any> {
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
          message: 'Utilizador nao encontra',
        };

      const resp = await this.prisma.salesTickets.findMany({
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
        where: {
          tiketType: {
            ticket: {
              event: {
                companyId: company.id,
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
        'erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async listAllSales(): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.findMany({
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
        'erro ao processar requisicao -> ' + error,
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
        'Erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async pay(data: any) {
    const url = 'https://eticketsmz.site/etickets-gateway/api/v1/payments';

    const headers = {
      Authorization:
        'Basic cGtfdGVzdF84NzkyMzNiMzgwYjRjMjU3YzAxMzQwNWIyNWNiM2Q5Mzpza190ZXN0XzViODNiZTJlYTlhZTVlZDdiY2ZlZTg2NjI3YmE3YzczMWYzNzVkNzZjY2QxMjI4Ng==',
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
          message: 'Erro ao relaziar pagamento',
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
}

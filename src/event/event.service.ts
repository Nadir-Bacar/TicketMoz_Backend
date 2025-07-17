import { plainToInstance } from 'class-transformer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateEventDto,
  EventResponseDto,
  UpdateEventDto,
} from './dto/event-dto';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  // abuscar todosos eventos
  async getAll(): Promise<any> {
    try {
      const response = await this.prisma.event.findMany({
        include: {
          company: true,
          userEvent: true,
          inviteScanner: true,
          ticket: {
            include: {
              ticketType: {
                include: {
                  SalesTickets: true,
                },
              },
            },
          },
        },
      });

      if (response.length == 0)
        return {
          success: true,
          message: 'Nenhum evento encontrado',
        };

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getAllDash(userID: string): Promise<any> {
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

      const resp = await this.prisma.event.findMany({
        where: { companyId: company.company.id },
        include: {
          company: true,
          userEvent: true,
          inviteScanner: true,
          ticket: {
            include: {
              ticketType: true,
            },
          },
        },
      });

      if (resp.length == 0)
        return {
          success: false,
          message: 'Nao ha eventos',
          data: company,
        };

      return {
        success: true,
        data: resp,
      };
    } catch (error) {
      throw new HttpException(error + '', HttpStatus.BAD_REQUEST);
    }
  }

  async getById(id: string): Promise<any> {
    try {
      const resp = await this.prisma.event.findFirst({
        where: { id: id },
        include: {
          company: true,
          userEvent: true,
          inviteScanner: true,
          ticket: {
            include: {
              ticketType: {
                include: {
                  SalesTickets: true,
                },
              },
            },
          },
        },
      });

      if (!resp) {
        return {
          success: false,
          message: 'Nenhum evento encontrado',
        };
      }

      return {
        success: true,
        data: plainToInstance(EventResponseDto, resp),
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getByToken(token: string): Promise<any> {
    try {
      const resp = await this.prisma.event.findFirst({
        where: {
          inviteScanner: {
            token: token,
          },
        },
        include: {
          company: true,
          userEvent: true,
          inviteScanner: true,
          ticket: {
            include: {
              ticketType: {
                include: {
                  SalesTickets: true,
                },
              },
            },
          },
        },
      });

      if (!resp) {
        return {
          success: false,
          message: 'Nenhum evento encontrado',
        };
      }

      return {
        success: true,
        data: plainToInstance(EventResponseDto, resp),
      };
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  //   criar evento
  async createEvent(event: CreateEventDto): Promise<any> {
    try {
      const response = await this.prisma.event.create({
        data: {
          title: event.title,
          category: event.category,
          description: event.description,
          image: event.image,
          location: event.location,
          event_date: event.event_date,
          start_time: event.start_time,
          end_time: event.end_time,
          company: {
            connect: { id: event.companyId },
          },
          ticket: {
            create: {
              ticketType: {
                createMany: {
                  data: event.ticket.ticketTypes.map((t) => ({
                    name: t.name,
                    quantity: t.quantity,
                    price: t.price,
                  })),
                },
              },
            },
          },
        },
        include: {
          ticket: {
            include: {
              ticketType: true,
            },
          },
        },
      });

      return {
        success: true,
        data: plainToInstance(EventResponseDto, response),
      };
    } catch (error) {
      throw new HttpException(
        'erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // update
  async updateEvent(eventId: string, event: CreateEventDto): Promise<any> {
    try {
      await this.prisma.event.deleteMany({
        where: { id: eventId },
      });

      // Verifica se o evento existe
      const response = await this.prisma.event.create({
        data: {
          title: event.title,
          category: event.category,
          description: event.description,
          image: event.image,
          location: event.location,
          event_date: event.event_date,
          start_time: event.start_time,
          end_time: event.end_time,
          company: {
            connect: { id: event.companyId },
          },
          ticket: {
            create: {
              ticketType: {
                createMany: {
                  data: event.ticket.ticketTypes.map((t) => ({
                    name: t.name,
                    quantity: t.quantity,
                    price: t.price,
                  })),
                },
              },
            },
          },
        },
        include: {
          ticket: {
            include: {
              ticketType: true,
            },
          },
        },
      });

      return {
        success: true,
        data: plainToInstance(EventResponseDto, response),
      };
    } catch (error) {
      throw new HttpException(
        `Erro ao atualizar evento: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteEvent(id: string): Promise<any> {
    try {
      await this.prisma.userEvent.deleteMany({
        where: { eventId: id },
      });

      const response = await this.prisma.event.delete({
        where: { id: id },
        include: {
          ticket: true,
        },
      });

      return {
        success: true,
        response,
      };
    } catch (error) {
      throw new HttpException(
        'erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async incrementQuantity(id: string, qtd: string): Promise<any> {
    try {
      const ticket = await this.prisma.ticketType.findFirst({
        where: { id: id },
      });

      const response = this.prisma.ticketType.update({
        where: { id: id },
        data: {
          quantity: ticket.quantity + Number(qtd),
        },
      });
    } catch (error) {
      throw new HttpException(
        'erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async decrementQuantity(id: string, qtd: string): Promise<any> {
    try {
      const ticket = await this.prisma.ticketType.findFirst({
        where: { id: id },
      });

      if (ticket.quantity <= 0) {
        return {
          success: false,
          message: 'Tem zero de tiket nao ha o uqe remover',
        };
      } else if (Number(qtd) > ticket.quantity) {
        return {
          success: false,
          message:
            'A quantidade a ser removida nao pode ser maior que o disponivel',
        };
      }

      const response = this.prisma.ticketType.update({
        where: { id: id },
        data: {
          quantity: ticket.quantity - Number(qtd),
        },
      });
    } catch (error) {
      throw new HttpException(
        'erro ao processar requisicao -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deleteAll(): Promise<any> {
    try {
      const resp = await this.prisma.event.deleteMany();
      return {
        success: true,
        message: 'Deletado omc sucesso',
        data: resp,
      };
    } catch (error) {
      console.log('Erro ->', error);
      throw new HttpException(
        `Erro ao processar requiscao -> ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async delete(id: string): Promise<any> {
    try {
      const resp = await this.prisma.event.delete({
        where: { id: id },
        include: {
          userEvent: true,
          ticket: {
            include: {
              ticketType: true,
            },
          },
        },
      });

      return {
        success: true,
        data: resp,
      };
    } catch (error) {
      console.log('Erro ->', error);
      throw new HttpException(
        `Erro ao processar requiscao -> ${error}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getScannersByEvent(eventID: string): Promise<any> {
    try {
      const resp = await this.prisma.userEvent.findMany({
        where: { eventId: eventID },
        include: {
          user: true,
          event: true,
        },
      });

      if (resp.length == 0) {
        return { success: false, message: 'Nehum utilizador econtrado' };
      }

      return {
        success: true,
        data: resp,
      };
    } catch (error) {
      return error;
    }
  }
}

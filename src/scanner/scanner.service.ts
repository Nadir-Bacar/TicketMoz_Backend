import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScannerService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyTicket(qrcode: string): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.findFirst({
        where: { qrCode: qrcode },
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

      if (!resp)
        return {
          success: false,
          message: 'Bilhete não encontrado',
        };

      if (resp.isUsed) {
        return {
          success: false,
          message: 'Bilhete já utilizado',
          data: resp,
        };
      } else {
        return {
          success: true,
          message: 'Bilhete válido',
        };
      }
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async scanTicket(qrcode: string): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.findFirst({
        where: { qrCode: qrcode },
        include: {
          user: true,
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

      if (!resp)
        return {
          success: false,
          message: 'Nenhum bilhete vendido encontrado',
        };

      if (resp.isUsed) {
        return {
          success: false,
          message:
            'Bilhete já foi utilizado, data e hora de utilização: ' +
            resp.updatedAt,
          data: resp,
        };
      } else {
        const check = await this.prisma.salesTickets.update({
          where: { id: resp.id },
          data: {
            isUsed: true,
          },
          include: {
            user: true,
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
          message: 'Bilhete validado com sucesso',
          data: check,
        };
      }
    } catch (error) {
      throw new HttpException(
        'Erro ao processar requisição -> ' + error,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getValidatedTickets(eventID: string): Promise<any> {
    try {
      const resp = await this.prisma.salesTickets.findMany({
        where: {
          tiketType: {
            ticket: {
              event: {
                id: eventID,
              },
            },
          },
          AND: {
            isUsed: true,
          },
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
      });

      if (resp.length == 0) {
        return {
          success: false,
          message: 'Nenhum bilhete validado encontrado',
        };
      }

      return {
        success: true,
        data: resp,
      };
    } catch (error) {
      throw new HttpException(error + '', HttpStatus.BAD_REQUEST);
    }
  }
}

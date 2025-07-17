import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';
import { SendTicketEmailParams } from 'types/ticket-mail';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(email: string, name: string, link: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Bem-vindo ao nosso app!',
      template: './welcome', // nome do arquivo template (sem extensão)
      context: {
        // dados para passar para o template
        name,
        link,
      },
    });
  }

  async sendTickets(params: SendTicketEmailParams) {
    await this.mailerService.sendMail({
      to: params.email,
      subject: `Bilhetes para o evento: ${params.eventName}!`,
      template: './tickets', // nome do arquivo template (sem extensão)
      context: {
        // dados para passar para o template
        ...params,
      },
    });
  }

  async resetPassword(name: string, email: string, resetLink: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Redidinir senha',
      template: './reset-password',
      context: {
        resetLink,
      },
    });
  }

  async notifyBlocked(email: string, name: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Conta Bloqueada',
      template: './bloked',
      context: { name },
    });
  }

  async notifyUnblocked(email: string, name: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Conta Desbloqueada',
      template: './unbloked',
      context: { name },
    });
  }

  async notifyPromoterApproved(email: string, name: string, company: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Conta de Promotor Aprovada',
      template: './approved',
      context: { name, company },
    });
  }
}

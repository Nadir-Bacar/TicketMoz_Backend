import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('welcome')
  async sendWelcomeEmail(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('link') link: string,
  ) {
    try {
      await this.emailService.sendWelcomeEmail(email, name, link);
      return {
        success: true,
        message: 'Email de boas-vindas enviado com sucesso',
      };
    } catch (error) {
      return {
        success: false,
        message: 'Falha ao enviar email',
        error: error.message,
      };
    }
  }
}

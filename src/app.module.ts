import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailModule } from './email/email.module';
import { PdfGeneretorModule } from './pdf-generetor/pdf-generetor.module';
import { InviteScannerModule } from './invite-scanner/invite-scanner.module';
import { ScannerModule } from './scanner/scanner.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // Alterado para smtp.gmail.com
        port: 587,
        secure: false,
        auth: {
          user: 'nadiraboobacar20211127@gmail.com',
          pass: 'jwhflwcynyvjzlxz',
        },
      },
      defaults: {
        from: '"TicketMOZ" <nadiraboobacar20211127@gmail.com>',
      },
      template: {
        dir: process.cwd() + '/src/templates', // Caminho absoluto
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    EventModule,
    TicketModule,
    EmailModule,
    PdfGeneretorModule,
    InviteScannerModule,
    ScannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

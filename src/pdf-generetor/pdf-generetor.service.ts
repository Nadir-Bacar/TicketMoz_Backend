import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { Response } from 'express';

@Injectable()
export class PdfGeneretorService {
  async generateHelloWorldPdf(res: Response): Promise<void> {
    try {
      const browser = await puppeteer.launch({
        headless: true, // Modificado para boolean conforme a tipagem
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      const page = await browser.newPage();

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f5f5f5;
              }
              h1 {
                color: #2c3e50;
                font-size: 3rem;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <h1>Olá Mundo!</h1>
          </body>
        </html>
      `;

      await page.setContent(html, { waitUntil: 'networkidle0' });

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '20mm',
          bottom: '20mm',
          left: '20mm',
        },
      });

      await browser.close();

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename="ola-mundo.pdf"',
      );
      res.send(Buffer.from(pdfBuffer));
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      res.status(500).send('Erro ao gerar PDF');
    }
  }
}

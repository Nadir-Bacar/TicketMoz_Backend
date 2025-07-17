import { IsNumber, IsOptional, IsString } from 'class-validator';

export class BuyTicketDto {
  @IsNumber()
  normal_ticket: number;

  @IsNumber()
  vip_ticket: number;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsString()
  eventId: string;

  @IsString()
  payment_method: string;

  @IsString()
  phone_number_payment: string;

  @IsString()
  user_id: string;

  @IsString()
  ticketID: string; // Garantir que sempre seja enviado
}

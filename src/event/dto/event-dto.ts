import { SalesTickets } from './../../../generated/prisma/index.d';
import {
  IsString,
  IsNumber,
  IsDateString,
  IsArray,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsNotEmpty,
  IsUrl,
} from 'class-validator';
import { Type } from 'class-transformer';

// ==================== TICKET TYPE ====================
export class TicketTypeResponseDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsString()
  ticketId: string;
}

export class CreateTicketTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateTicketTypeDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsNumber()
  @IsOptional()
  price?: number;
}

// ==================== TICKET ====================
export class TicketResponseDto {
  @IsString()
  id: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TicketTypeResponseDto)
  ticketTypes: TicketTypeResponseDto[];

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}

export class CreateTicketDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTicketTypeDto)
  ticketTypes: CreateTicketTypeDto[];
}

export class UpdateTicketDto {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateTicketTypeDto)
  ticketTypes?: UpdateTicketTypeDto[];
}

// ==================== EVENT ====================
export class EventResponseDto {
  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  location: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsString()
  event_date: string;

  @IsString()
  start_time: string;

  @IsString()
  end_time: string;

  @IsString()
  companyId: string;

  @ValidateNested()
  @Type(() => TicketResponseDto)
  ticket: TicketResponseDto;

  @IsArray()
  @IsOptional()
  sales: Array<any>;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsString()
  @IsNotEmpty()
  event_date: string;

  @IsString()
  @IsNotEmpty()
  start_time: string;

  @IsString()
  @IsNotEmpty()
  end_time: string;

  @IsString()
  @IsNotEmpty()
  companyId: string;

  @ValidateNested()
  @Type(() => CreateTicketDto)
  ticket: CreateTicketDto;
}

export class UpdateEventDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsUrl()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  event_date?: string;

  @IsString()
  @IsOptional()
  start_time?: string;

  @IsString()
  @IsOptional()
  end_time?: string;
}

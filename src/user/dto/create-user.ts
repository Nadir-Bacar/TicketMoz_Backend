import { Exclude } from 'class-transformer';
import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  IsBoolean,
  IsObject,
} from 'class-validator';

// DTO para criação de Company
export class CreateCompanyDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone_number: string;

  @IsString()
  @IsOptional()
  nuit_url?: string;

  @IsBoolean()
  @IsOptional()
  isVerify?: boolean;
}

// DTO para busca de Company
export class FindCompanyDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}

// DTO para atualização de Company
export class UpdateCompanyDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  @IsString()
  nuit_url?: string;

  @IsOptional()
  @IsBoolean()
  isVerify?: boolean;
}

// DTO para criação de User
export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  user_type: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  token?: string;

  @IsOptional()
  companyid?: string;

  @IsOptional()
  company?: CreateCompanyDto;
}

// DTO para busca de User
export class FindUserDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsObject()
  company: FindCompanyDto;

  @Exclude()
  companyid?: string;

  @Exclude()
  password: string;

  @Exclude()
  token?: any[];
}

// DTO para atualização de User
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  user_type?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  token?: string;

  @IsOptional()
  companyid?: string;
}

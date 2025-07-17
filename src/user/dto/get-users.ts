import { Exclude, Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class UserDto {
  @Expose()
  @IsString()
  name: string;
  status: string;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  user_type: string;

  @Exclude()
  password: string;

  @Exclude()
  token: string;
}

export class GetUserPromotorDto {
  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  user_type: string;

  @Expose()
  @IsString()
  status: string;

  @Expose()
  @IsString()
  nrBi: string;

  @Expose()
  @IsString()
  urlDocument: string;

  @Expose()
  @IsString()
  companyName: string;

  @Expose()
  @IsString()
  nuit: string;

  @Exclude()
  password: string;
}

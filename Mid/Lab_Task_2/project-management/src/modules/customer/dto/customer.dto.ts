import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCustomerDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  email: string = "";

  @IsNotEmpty()
  phone: string = "";

  @IsNotEmpty()
  address: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateCustomerDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  email: string = "";

  @IsOptional()
  phone: string = "";

  @IsOptional()
  address: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
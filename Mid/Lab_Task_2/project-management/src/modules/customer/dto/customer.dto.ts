import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsEmail()
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: "Phone is required" })
  phone!: string;

  @IsString()
  @IsNotEmpty({ message: "Address is required" })
  address!: string;
}

export class UpdateCustomerDto {
  @IsString()
  @IsOptional()
  name!: string;

  @IsEmail()
  @IsOptional()
  email!: string;

  @IsString()
  @IsOptional()
  phone!: string;

  @IsString()
  @IsOptional()
  address!: string;
}
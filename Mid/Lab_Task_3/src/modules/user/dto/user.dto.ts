import { Type } from "class-transformer";
import {
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Max,
  MinLength,
  Min,
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: "Full name is required" })
  @MinLength(3, { message: "Full name must be at least 3 characters" })
  fullName!: string;

  @IsEmail({}, { message: "Email must be a valid email address" })
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
    message:
      "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
  })
  password!: string;

  @Type(() => Number)
  @IsInt({ message: "Age must be an integer" })
  @Min(18, { message: "Age must be at least 18" })
  @Max(60, { message: "Age must not exceed 60" })
  age!: number;

  @IsString()
  @IsNotEmpty({ message: "Phone is required" })
  @Matches(/^01\d{9}$/, {
    message: "Phone must be exactly 11 digits beginning with 01",
  })
  phone!: string;

  @IsIn(["student", "teacher"], {
    message: "Account type must be either student or teacher",
  })
  accountType!: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: "Address must be at least 10 characters" })
  address?: string; 
}
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCategoryDto {
  @IsNotEmpty()
  name: string = "";

  @IsNotEmpty()
  description: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}

export class UpdateCategoryDto {
  @IsOptional()
  name: string = "";

  @IsOptional()
  description: string = "";

  @IsOptional()
  created_at?: Date = new Date();

  @IsOptional()
  updated_at?: Date = new Date();
}
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto/category.dto";

@Controller("categories")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return await this.categoryService.getCategories();
  }

  @Get(":id")
  async getCategory(@Param("id") id: string) {
    return await this.categoryService.getCategory(id);
  }

  @Post()
  async createCategory(@Body() dto: CreateCategoryDto) {
    return await this.categoryService.createCategory(dto);
  }

  @Patch(":id")
  async updateCategory(@Param("id") id: string, @Body() dto: UpdateCategoryDto) {
    return await this.categoryService.updateCategory(id, dto);
  }

  @Delete(":id")
  async deleteCategory(@Param("id") id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
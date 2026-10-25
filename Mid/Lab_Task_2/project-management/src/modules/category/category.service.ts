import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { Repository } from "typeorm";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto/category.dto";


@Injectable()
export class CategoryService {
constructor(
  @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
) {}

async getCategories() {
try {
  const categories = await this.categoryRepository.find();
  return categories;}
  catch (error) {
    throw error;
}
}

async getCategory(id: string) {
try {
  const category = await this.categoryRepository.findOne({ where: { id:id } });
  if (!category) {
    throw new NotFoundException("Category with ID not found");
  }
  return category;}
  catch (error) {
    throw error;
}
}

async createCategory(dto: CreateCategoryDto) {
try{
  const responce = await this.categoryRepository.create(dto);
  return await this.categoryRepository.save(responce);
}
catch (error) {
  throw error;
}}

async updateCategory(id: string, dto: UpdateCategoryDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Category with ID not found");
    }
    const category = await this.categoryRepository.findOne({ where: { id:id } });
    if (!category) {
      throw new NotFoundException("Category with ID not found");
    }
    Object.assign(category, dto);
    const {id: cid, ...rest}=category;
    return await this.categoryRepository.update({id:id}, rest);
  }
  catch(error){
    throw error;
  }
}

async deleteCategory(id: string) {
  try{
  const category = await this.categoryRepository.findOne({ where: { id:id } });
if (!category) {
  throw new NotFoundException("Category with ID not found");
}
return await this.categoryRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}
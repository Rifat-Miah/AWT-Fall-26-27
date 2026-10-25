import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}
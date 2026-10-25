import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "customers" })
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  phone!: string;

  @Column()
  address!: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;
}
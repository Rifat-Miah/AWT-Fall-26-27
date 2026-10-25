import { MigrationInterface, QueryRunner, Table } from "typeorm";



export class CreateCustomerTable1792916468953 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"customers",
                    columns:[

                        {
                            name:"id",
                            type:"uuid",
                            isPrimary: true,
                            generationStrategy:"uuid",
                            default:"uuid_generate_v4()",
                        },
                        {
                            name:"name",
                            type:"varchar",
                            isNullable:false,
                        },

                         {
                            name:"email",
                            type:"varchar",
                            isNullable:false,
                        },
                         {
                            name:"phone",
                            type:"varchar",
                            isNullable:false,
                        },
                         {
                            name:"address",
                            type:"varchar",
                            isNullable:false,
                        },
                         {
                            name:"created_at",
                            type:"timestamp",
                            default:"CURRENT_TIMESTAMP(6)"
                        },
                         {
                            name:"updated_at",
                            type:"timestamp",
                            default:"CURRENT_TIMESTAMP(6)"
                        },

                    ],
                } ),
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }
}
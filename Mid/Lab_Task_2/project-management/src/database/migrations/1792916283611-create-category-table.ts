import { MigrationInterface, QueryRunner, Table } from "typeorm";



export class CreateCategoryTable1792916283611 implements MigrationInterface{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"categories",
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
                            name:"description",
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
        await queryRunner.dropTable("categories");
    }
}
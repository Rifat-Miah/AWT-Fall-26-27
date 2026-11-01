import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1793518967922 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    { 
                        name: "id", 
                        type: "uuid", 
                        isPrimary: true, 
                        default: "uuid_generate_v4()" 
                    },
                    { 
                        name: "fullName", 
                        type: "varchar", 
                        length: "255" 
                    },
                    { 
                        name: "email", 
                        type: "varchar", 
                        length: "255", 
                        isUnique: true 
                    },
                    { 
                        name: "password", 
                        type: "varchar", 
                        length: "255" 
                    },
                    { 
                        name: "age", 
                        type: "int" 
                    },
                    { 
                        name: "phone", 
                        type: "varchar", 
                        length: "20" 
                    },
                    { 
                        name: "accountType", 
                        type: "varchar", 
                        length: "50" 
                    },
                    { 
                        name: "address", 
                        type: "varchar", 
                        length: "255", 
                        isNullable: true 
                    },
                    { 
                        name: "created_at", 
                        type: "timestamp", 
                        default: "now()" 
                    },
                    { 
                        name: "updated_at", 
                        type: "timestamp", 
                        default: "now()" 
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
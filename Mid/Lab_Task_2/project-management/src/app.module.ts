import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostgresDatabaseProviderModule } from "@/providers/database/postgres/provider.module";
import { CategoryModule } from "@/modules/category/category.module";
import { ProductModule } from "@/modules/product/product.module";
import { CustomerModule } from "@/modules/customer/customer.module";

@Module({
  imports: [
    PostgresDatabaseProviderModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    ProductModule,
    CustomerModule,
  ],
})
export class AppModule {}
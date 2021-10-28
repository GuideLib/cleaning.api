import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), 
    OrdersModule, 
    ClientsModule, 
    EmployeesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  name: String;

  @Prop()
  role: String;

  @Prop()
  phoneNum: String;

  @Prop()
  passportPhoto: String;

  @Prop()
  employeePhoto: String;

  @Prop()
  passwordHash: String;
}

export const OrderSchema = SchemaFactory.createForClass(Employee);
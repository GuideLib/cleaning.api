import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop()
  city: String;

  @Prop()
  street: String;

  @Prop()
  houseNum: Number;

  @Prop()
  frame: Number;

  @Prop()
  entranceNum: Number;

  @Prop()
  floor: Number;

  @Prop()
  flatNum: Number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
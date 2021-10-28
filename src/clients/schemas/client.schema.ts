import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Address } from '../../address/schemas/address.schema'

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: String;

  @Prop()
  phoneNum: String;

  @Prop()
  email: String;

  @Prop()
  passwordHash: String;

  @Prop()
  address: [Address];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
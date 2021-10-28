import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { Address } from '../../address/schemas/address.schema'
import { Client } from '../../clients/schemas/client.schema'

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  datetime: Date;

  @Prop()
  status: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
  client: Client;

  @Prop()
  address: Address;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
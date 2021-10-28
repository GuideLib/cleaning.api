import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private orderModel: Model<ClientDocument>) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const createdClient = new this.orderModel(createClientDto);
    return createdClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

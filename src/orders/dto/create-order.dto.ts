import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from '../../address/dto/create-address.dto'

export class CreateOrderDto {
    @ApiProperty()
    datetime: Date;

    @ApiProperty()
    client_id: Number;

    @ApiProperty()
    address: CreateAddressDto;
}

import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from '../../address/dto/create-address.dto'

export class CreateClientDto {
    @ApiProperty()
    name: String;
  
    @ApiProperty()
    phoneNum: String;
  
    @ApiProperty()
    email: String;
  
    @ApiProperty()
    passwordHash: String;
  
    @ApiProperty()
    address: [CreateAddressDto];
}

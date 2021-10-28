import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
    @ApiProperty()
    city: String;
    
    @ApiProperty()
    street: String;
    
    @ApiProperty()
    houseNum: Number;
    
    @ApiProperty()
    frame: Number;
    
    @ApiProperty()
    entranceNum: Number;
    
    @ApiProperty()
    floor: Number;
    
    @ApiProperty()
    flatNum: Number;
}

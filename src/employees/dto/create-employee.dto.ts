import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    @ApiProperty()
    name: String;
  
    @ApiProperty()
    role: String;
  
    @ApiProperty()
    phoneNum: String;
  
    @ApiProperty()
    passportPhoto: String;
  
    @ApiProperty()
    employeePhoto: String;
  
    @ApiProperty()
    password: String;
}

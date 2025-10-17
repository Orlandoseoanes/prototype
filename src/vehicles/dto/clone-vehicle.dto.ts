// src/vehicles/dto/clone-vehicle.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CloneVehicleDto {
  @ApiProperty({
    example: '6711ffb5e75cd3a443f78aa1',
    description: 'ID del vehículo base que se va a clonar',
  })
  @IsString()
  id: string;
}

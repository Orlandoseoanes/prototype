// src/vehicles/dto/create-vehicle.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({ example: 'Toyota', description: 'Marca del vehículo' })
  @IsString()
  marca: string;

  @ApiProperty({ example: 'Corolla', description: 'Modelo del vehículo' })
  @IsString()
  modelo: string;

  @ApiProperty({ example: 'Gris', description: 'Color del vehículo' })
  @IsString()
  color: string;

  @ApiProperty({ example: 4, description: 'Número de puertas del vehículo' })
  @IsInt()
  @Min(2)
  @Max(5)
  puertas: number;
}

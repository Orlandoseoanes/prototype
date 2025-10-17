// src/vehicles/vehicles.controller.ts
import { Controller, Get, Post, Body} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { CloneVehicleDto } from './dto/clone-vehicle.dto';

@ApiTags('Vehículos')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post('crear')
  @ApiOperation({ summary: 'Crea un nuevo vehículo base' })
  async crear(@Body() dto: CreateVehicleDto) {
    return this.vehiclesService.crearVehiculo(dto);
  }

  @Post('clonar')
  @ApiOperation({ summary: 'Clona un vehículo existente por su ID' })
  async clonar(@Body() dto: CloneVehicleDto) {
    return this.vehiclesService.clonarVehiculo(dto.id);
  }

  @Get('listar')
  @ApiOperation({ summary: 'Lista todos los vehículos guardados' })
  async listar() {
    return this.vehiclesService.listarVehiculos();
  }
}

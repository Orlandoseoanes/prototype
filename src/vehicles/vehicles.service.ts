// src/vehicles/vehicles.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from './entity/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

  async crearVehiculo(dto: CreateVehicleDto): Promise<Vehicle> {
    const vehiculo = new this.vehicleModel(dto);
    return vehiculo.save();
  }

  async clonarVehiculo(id: string): Promise<Vehicle> {
  const original = await this.vehicleModel.findById(id);
  if (!original) throw new NotFoundException('Vehículo no encontrado');

  // ✅ Clon manual
  const data = original.toObject(); // convierte a objeto plano
  delete data._id; // elimina el id original

  // modificamos propiedades del clon
  data.color = 'Rojo';
  data.modelo = `${data.modelo} (Clon)`;

  // guardamos el nuevo documento
  const clon = new this.vehicleModel(data);
  return clon.save();
}

  async listarVehiculos(): Promise<Vehicle[]> {
    return this.vehicleModel.find();
  }
}

// src/vehicles/vehicle.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Prototype } from '../dto/interfaces/vehicle.prototype';

@Schema()
export class Vehicle extends Document implements Prototype<Vehicle> {
  @Prop({ required: true })
  marca: string;

  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  puertas: number;

  clone(): Vehicle {
    const copia = new Vehicle();
    copia.marca = this.marca;
    copia.modelo = this.modelo;
    copia.color = this.color;
    copia.puertas = this.puertas;
    return copia;
  }
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

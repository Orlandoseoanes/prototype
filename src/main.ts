import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:3000", // Frontend
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Patrón Prototype API')
    .setDescription('Ejemplo del patrón Prototype en NestJS (vehículos)')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignora propiedades no definidas en DTO
      forbidNonWhitelisted: true,
      transform: true, // transforma los tipos automáticamente
    }),
  );

  await app.listen(3005);
  console.log('🚀 Servidor corriendo en http://localhost:3005');
  console.log('📘 Swagger en http://localhost:3005/api');
}
bootstrap();

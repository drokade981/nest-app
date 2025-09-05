import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted: true, // to remove unwanted request body param
    transform: true // to transform object to instance of DTO
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const config = new DocumentBuilder()
    .setTitle('Ningowood API')
    .setDescription('The Ningowood API description')
    .setVersion('0.1')
    .addTag('ningowood')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}

bootstrap();

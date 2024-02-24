import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { version as VERSION } from '../package.json';
import { AppModule } from './app.module';
import { SwaggerTheme } from 'swagger-themes';
import { SwaggerThemeNameEnum } from 'swagger-themes/build/enums/swagger-theme-name';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerTheme: SwaggerTheme = new SwaggerTheme();
  const darkStyle: string = swaggerTheme.getBuffer(SwaggerThemeNameEnum.DARK);
  const config = new DocumentBuilder()
    .setTitle('TODO')
    .setDescription('Todo API description')
    .setVersion(VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customCss: darkStyle });

  await app.listen(3000);
}
bootstrap();

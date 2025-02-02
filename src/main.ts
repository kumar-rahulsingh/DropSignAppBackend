import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
// import * as crypto from 'crypto';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Set request payload size limit to 10MB
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  app.use(bodyParser.raw({ type: 'application/json' }));

  // ✅ Enable CORS for all origins and common HTTP methods
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ✅ Ensure PORT is a number (fixes potential issues)
  const port = parseInt(process.env.PORT || '3000', 10);
  await app.listen(port);

  console.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();

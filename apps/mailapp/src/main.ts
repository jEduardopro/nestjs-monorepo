import { NestFactory } from '@nestjs/core';
import { MailappModule } from './mailapp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

/**
 * * This the MS of EMAIL
 */
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: '6379',
      },
    },
  );
  await app.listen();
}
bootstrap();

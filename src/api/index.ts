import { createServer, proxy } from 'aws-serverless-express';
import { Context, Handler } from 'aws-lambda';
import { AppModule } from '../app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const expressApp = express();

async function createNestServer(expressInstance) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*', credentials: true });
  await app.init();
}

createNestServer(expressApp);

const server = createServer(expressApp);

export const handler: Handler = (event: any, context: Context) => {
  proxy(server, event, context);
};

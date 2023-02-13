import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as express from 'express';

import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.use('/', express.static(join(__dirname, '../public/views')));
  app.setBaseViewsDir(join(__dirname, '../public', 'views'));
  app.setViewEngine('pug');
  app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000,
      },
      store: require('connect-mongo').create({
        mongoUrl: process.env.DB_URL,
      }),
    }),
  );
  const PORT = 5000;
  await app.listen(PORT);
  console.log(`Application is running on: 🎁 http://localhost:${PORT}`);
}
bootstrap();

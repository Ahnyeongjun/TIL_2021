import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import logger from 'koa-logger';
import bodyparser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import route from '../route';

const app = new Koa();

export const init = async (app: any) => {
  const router = new Router();

  await dotenv.config();
  console.log('dotenv configuration');
  await router.use('/auth', route.routes());

  await app
    .use(helmet())
    .use(cors())
    .use(bodyparser())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods());

  await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    charset: 'utf8',
    extra: { connectionLimit: 100 },
    entities: ['src/entity/**/*.ts'],
  })
    .then(async () => console.log('database connect success '))
    .catch(async (error) => console.log(error));
};

export const server = app;

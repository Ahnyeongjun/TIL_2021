import Router from '@koa/router';

const route = new Router();
import { getRepository, Repository } from 'typeorm';
import Koa from 'koa';
// import { UserController } from '../controller';
import { User } from '../entity';
import { UserRepository } from '../repository';
const userController: UserRepository = new UserRepository();

// route.post('/sign', userController.createUser);
route.get('/', async (ctx: Koa.Context) => {
  // Get the movie repository from TypeORM.
  //   const movieRepo = getRepository(UserRepository);
  ctx.body = userController.createUser('S', 'S', 's');
});
// route.patch('/password', decryptoPassword);

export default route;

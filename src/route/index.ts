import Router from '@koa/router';

const route = new Router();
// import { getRepository, Repository } from 'typeorm';
import Koa from 'koa';
// import { UserService } from '../servies/user';
import { UserController } from '../controller';
// import { User } from '../entity';
// import { UserRepository } from '../repository';
// const userController: UserRepository = new UserRepository();
// const userService: UserService = new UserService(userController);
// route.post('/sign', userController.createUser);
const userController: UserController = new UserController();
route.get('/', async (ctx: Koa.Context) => {
  ctx.body = userController.createUser('S', 's', 's');
  // Get the movie repository from TypeORM.
  //   const movieRepo = getRepository(UserRepository);
  //   ctx.body = userService.createUser('S', 'S', 's');
});
// route.patch('/password', decryptoPassword);

export default route;

import Router from '@koa/router';

// import { getRepository, Repository } from 'typeorm';
import Koa from 'koa';
// import { UserService } from '../servies/user';
import { UserController } from '../controller';
import { getCustomRepository, createConnection, getRepository } from 'typeorm';
import { UserRepository } from '../repository';
import { User } from '../entity';
// import { User } from '../entity';
// import { UserRepository } from '../repository';
// const userController: UserRepository = new UserRepository();
// const userService: UserService = new UserService(userController);
// route.post('/sign', userController.createUser);
export default (route: Router) => {
  route = new Router();

  route.get('/', async (ctx: Koa.Context) => {
    const userController: UserController = new UserController();

    // const userRepository = getRepository(User);
    const userRepository = getCustomRepository(UserRepository);
    ctx.body = userRepository.find();
    // userRepository.connection.findByName();

    // ctx.body = userRepository.createUser('S', 's', 's');
    // Get the movie repository from TypeORM.
    //   const movieRepo = getRepository(UserRepository);
    //   ctx.body = userService.createUser('S', 'S', 's');
  });
  return route.routes();
};
// route.patch('/password', decryptoPassword);

// export default route;

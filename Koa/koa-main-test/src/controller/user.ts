import { Context, Next } from 'koa';
import { UserRepository } from '../repository';
import { getCustomRepository } from 'typeorm';
import { UserService } from '../service';
import { userRequest } from '../interfaces/request';
export class UserController {
  // private userRepository: UserRepository = new UserRepository();
  private userRepository = getCustomRepository(UserRepository);
  private userService: UserService = new UserService(this.userRepository);

  public createUser = async (name: string, id: string, password: string) => {
    try {
      // const userData = <userRequest>ctx.state;
      // await this.userService.createUser(name, id, password);
      this.userService.findOne();
      console.log('[data] - createUser : true');
      // ctx.status = 201;
    } catch (error) {
      console.log('[data] - createUser : false');
      console.log(error);
      // ctx.status = 400;
    }
  };
}

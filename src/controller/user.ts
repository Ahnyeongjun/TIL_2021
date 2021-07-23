import { Context, Next } from 'koa';
import { UserRepository } from '../repository';
import { getCustomRepository } from 'typeorm';
import { UserService } from '../service';
import { userRequest } from '../interfaces/request';
export class UserController {
  private userRepository: UserRepository = getCustomRepository(UserRepository);
  private userService: UserService = new UserService(this.userRepository);

  public createUser = async (ctx: Context) => {
    try {
      const userData = <userRequest>ctx.state;
      await this.userService.createUser(userData);
      console.log('[data] - createUser : true');
      ctx.status = 201;
    } catch (error) {
      console.log('[data] - createUser : false');
      console.log(error);
      ctx.status = 400;
    }
  };
}

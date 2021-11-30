import { UserRepository } from '../repository';
import { User } from '../entity';
import { userRequest } from '../interfaces/request';

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async findOneByPassword(password: string) {
    return await this.userRepository.findOneByPassword(password);
  }

  public async createUser(name: string, id: string, password: string) {
    return await this.userRepository.createUser(name, id, password);
  }
  public async findOne() {
    return await this.userRepository.findOne();
  }
}

import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser(name: string, id: string, password: string) {
    await getRepository(User).createQueryBuilder().insert().into(User).values({ name, id, password }).execute();
  }

  public async findOneByPassword(password: string) {
    await getRepository(User)
      .createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('user.password = :passowrd', {
        password: password,
      })
      .getOne();
  }
}

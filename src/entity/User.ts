import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Index()
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column()
  name: string;

  @Column()
  id: string;

  @Column()
  password: string;

  static addUser(name: string, id: string, password: string) {
    return this.createQueryBuilder()
      .insert()
      .into(User)
      .values({ name, id, password })
      .execute();
  }
}

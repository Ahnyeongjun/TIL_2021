import { User } from '../../entity/User';
import { getConnection } from 'typeorm';
import { errorCode } from '../../lib/errorcode';
import { Next, Context } from 'koa';

export const duplicateCheckUserWithId = async (ctx: Context, next: Next) => {
  const { id } = <BaseUser>ctx.request.body;
  console.log(id);
  const user = await getConnection().createQueryBuilder().select('user').from(User, 'user').where('user.id = :id', { id: id }).getOne();

  if (user === undefined) {
    console.log(`[validate] - duplicateCheckUserWithId : ${true}`);
    ctx.status = 200;
    await next();
  } else {
    console.log(`[validate] - duplicateCheckUserWithId : ${false}`);
    ctx.body = await errorCode(102);
    ctx.status = 403;
  }
};

export const lengthCheckUserInformation = async (ctx: Context, next: Next) => {
  const { id, name, password } = <BaseUser>ctx.request.body;
  if (!/^{8,20}$/.test(password && id) && name.length > 1) {
    console.log(`[validate] - lengthCheckUserInformation : ${false}`);
    ctx.status = 403;
  } else {
    console.log(`[validate] - lengthCheckUserInformation : ${true}`);
    ctx.status = 200;
    await next();
  }
};

interface BaseUser {
  id: string;
  name: string;
  password: string;
}

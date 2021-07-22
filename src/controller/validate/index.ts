import { User } from '../../entity/User';
import { getConnection } from 'typeorm';
import { errorCode } from '../../lib/errorcode';

export const duplicateCheckUserWithId = async (ctx: any, next: any) => {
  const { id } = ctx.request.body;
  console.log(id);
  const user = await getConnection()
    .createQueryBuilder()
    .select('user')
    .from(User, 'user')
    .where('user.id = :id', { id: id })
    .getOne();

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

export const lengthCheckUserInformation = async (ctx: any, next: any) => {
  const { id, name, password } = ctx.request.body;
  if (!/^{8,20}$/.test(password && id) && name > 1) {
    console.log(`[validate] - lengthCheckUserInformation : ${false}`);
    ctx.status = 403;
  } else {
    console.log(`[validate] - lengthCheckUserInformation : ${true}`);
    ctx.status = 200;
    await next();
  }
};

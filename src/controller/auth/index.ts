import { Context, Next } from 'koa';
import crypto from 'crypto';
import short from 'short-uuid';
import { User } from '../../entity/User';
import { getConnection } from 'typeorm';

const cryptoPassword = async (password: string) => {
  return crypto
    .createHmac('sha512', process.env.CRYPTO as string)
    .update(password)
    .digest('hex');
};

export const decryptoPassword = async (ctx: Context, next: Next) => {
  const user = await getConnection()
    .createQueryBuilder()
    .select('user')
    .from(User, 'user')
    .where('user.password = :passowrd', {
      password: cryptoPassword(ctx.request.body.password),
    })
    .getOne();

  if (user === undefined) {
    console.log(`[validate] - decryptoPassword : ${true}`);
    ctx.status = 200;
    await next();
  } else {
    console.log(`[validate] - decryptoPassword : ${false}`);
    ctx.status = 403;
  }
};

const translator = short(short.constants.flickrBase58, {
  consistentLength: false,
});

export const createUserData = async (ctx: Context, next: Next) => {
  try {
    const { name, id, password } = ctx.request.body;
    ctx.state = { name, id };
    ctx.state.password = await cryptoPassword(password);

    console.log('[service] - createUserData : true');
    await next();
  } catch (error) {
    console.log('[service] - createUserData : false');
    console.log(error);
    ctx.status = 400;
  }
};

export const createUser = async (ctx: Context, next: Next) => {
  try {
    const { name, id, password } = ctx.state;
    console.log(ctx.request.body);
    console.log(ctx.body);
    await User.addUser(name, id, password);
    console.log('[data] - createUser : true');
    ctx.status = 201;
  } catch (error) {
    console.log('[data] - createUser : false');
    console.log(error);
    ctx.status = 400;
  }
};

// export const checkUserdata = async (ctx: any, next: any) => {
//   try {
//     if (duplicateCheckUserWithId(ctx) && lengthCheckUserInformation(ctx))
//       ctx.status = 403;
//     await next();
//   } catch (error) {
//     console.log(error);
//     ctx.status = 403;
//   }
// };

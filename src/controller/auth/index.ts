import { Context } from 'koa';
import crypto from 'crypto';
import short from 'short-uuid';
import { User } from '../../entity/User';

const cryptoPassword = async (password: any) => {
  return crypto
    .createHmac('sha512', process.env.CRYPTO as string)
    .update(password)
    .digest('hex');
};

const translator = short(short.constants.flickrBase58, {
  consistentLength: false,
});

export const createUserData = async (ctx: any, next: any) => {
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

export const createUser = async (ctx: Context, next: any) => {
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

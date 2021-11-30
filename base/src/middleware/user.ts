// import { Context, Next } from 'koa';
// import crypto from 'crypto';
// import { User } from '../entity/User';

// export const cryptoPassword = async (password: string) => {
//   return crypto
//     .createHmac('sha512', process.env.CRYPTO as string)
//     .update(password)
//     .digest('hex');
// };

// export const decryptoPassword = async (ctx: Context, next: Next) => {
//   const user = await getConnection()
//     .createQueryBuilder()
//     .select('user')
//     .from(User, 'user')
//     .where('user.password = :passowrd', {
//       password: cryptoPassword(ctx.request.body.password),
//     })
//     .getOne();

//   if (user === undefined) {
//     console.log(`[validate] - decryptoPassword : ${true}`);
//     ctx.status = 200;
//     await next();
//   } else {
//     console.log(`[validate] - decryptoPassword : ${false}`);
//     ctx.status = 403;
//   }
// };
// export const createUserData = async (ctx: Context, next: Next) => {
//   try {
//     const { name, id, password } = ctx.request.body;
//     ctx.state = { name, id };
//     ctx.state.password = await cryptoPassword(password);

//     console.log('[service] - createUserData : true');
//     await next();
//   } catch (error) {
//     console.log('[service] - createUserData : false');
//     console.log(error);
//     ctx.status = 400;
//   }
// };

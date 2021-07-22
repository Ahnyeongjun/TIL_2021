import Router from '@koa/router';

const route = new Router();

import {
  duplicateCheckUserWithId,
  lengthCheckUserInformation,
} from '../controller/validate';
import {
  createUserData,
  createUser,
  decryptoPassword,
} from '../controller/auth';
route.post(
  '/sign',
  lengthCheckUserInformation,
  duplicateCheckUserWithId,
  createUserData,
  createUser,
);

route.patch('/password', decryptoPassword);
export default route;

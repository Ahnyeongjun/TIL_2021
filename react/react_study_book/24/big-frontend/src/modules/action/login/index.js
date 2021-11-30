const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";

const REQUEST_LOGIN = "login/REQUEST_LOGIN";

const requestLogin = payload => ({
  type: REQUEST_LOGIN,
  payload
});



export const loginConstant = {
  ACCESS_TOKEN,
  REFRESH_TOKEN
};

export const loginAction = {
  REQUEST_LOGIN,
};

export const loginActionCreater = {
  requestLogin,
};

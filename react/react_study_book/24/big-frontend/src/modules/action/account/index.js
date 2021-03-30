export const SET_IS_ACCOUNTED = "account/SET_IS_ACCOUNTED";

export const SET_LOGIN_ERROR = "account/SET_LOGIN_ERROR";
export const SET_SIGN_UP_ERROR = "account/SET_SIGN_UP_ERROR";


//

export const REQUEST_SIGN_UP_SAGA = "account/REQUEST_SIGN_UP_SAGA";


export const setLoginError = payload => ({
  type: SET_LOGIN_ERROR,
  payload
});
export const setSignUpError = payload => ({
  type: SET_SIGN_UP_ERROR,
  payload
});


//

export const requestSignUpSaga = payload => ({
  type: REQUEST_SIGN_UP_SAGA,
  payload
});

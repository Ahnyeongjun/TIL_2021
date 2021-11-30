export const SET_NAME = "account/SET_NAME";
export const SET_IS_ACCOUNTED = "account/SET_IS_ACCOUNTED";

export const SET_LOGIN_ERROR = "account/SET_LOGIN_ERROR";
export const SET_SIGN_UP_ERROR = "account/SET_SIGN_UP_ERROR";
export const SET_PW_CHANGE_ERROR = "account/SET_PW_CHANGE_ERROR";
export const SET_AUTHENTICATE_ERROR = "account/SET_AUTHENTICATE_ERROR";

//

export const REQUEST_SIGN_UP_SAGA = "account/REQUEST_SIGN_UP_SAGA";
export const REQUEST_PW_CHANGE_SAGA = "account/REQUEST_PW_CHANGE_SAGA";
export const REQUEST_AUTHENTICATE_SAGA = "account/REQUEST_AUTHENTICATE_SAGA";

export const setName = payload => ({
  type: SET_NAME,
  payload
});
export const setIsAccounted = payload => ({
  type: SET_IS_ACCOUNTED,
  payload
});

export const setLoginError = payload => ({
  type: SET_LOGIN_ERROR,
  payload
});
export const setSignUpError = payload => ({
  type: SET_SIGN_UP_ERROR,
  payload
});
export const setPwChangeError = payload => ({
  type: SET_PW_CHANGE_ERROR,
  payload
});
export const setAuthenticateError = payload => ({
  type: SET_AUTHENTICATE_ERROR,
  payload
});

//

export const requestSignUpSaga = payload => ({
  type: REQUEST_SIGN_UP_SAGA,
  payload
});
export const requestPwChangeSaga = payload => ({
  type: REQUEST_PW_CHANGE_SAGA,
  payload
});
export const requestAuthenticateSaga = payload => ({
  type: REQUEST_AUTHENTICATE_SAGA,
  payload
});

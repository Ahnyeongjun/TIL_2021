import { call, put, takeEvery } from "redux-saga/effects";
import {
  requestApi,
  methodType,

} from "../../../lib/REQUEST_API";
import { AUTH } from "../../../lib/requestUrl";
import {
  REQUEST_SIGN_UP_SAGA,

} from "../../action/account";

function* requestSignUp(action) {
  const { email, name, password, confirmPassword } = action.payload;

  try {
    const res = yield call(requestApi, methodType.POST, AUTH.SIGN_UP_URL(), {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword
    });

    console.log(res);

    alert("회원가입에 성공했습니다.");
    window.location.href = "/login ";
  } catch (err) {
    switch (err) {
      case 400: {
        alert("아이디 또는 비밀번호의 형식이 잘못되었습니다.");
      }
    }
  }
}



function* accountSaga() {
  yield takeEvery(REQUEST_SIGN_UP_SAGA, requestSignUp);
}

export default accountSaga;

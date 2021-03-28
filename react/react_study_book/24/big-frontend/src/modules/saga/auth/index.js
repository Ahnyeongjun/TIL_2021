import { call, put, takeEvery } from "redux-saga/effects";
import { AUTH } from "../../../lib/API";
import { methodType, requestApiWithoutBodyWithToken } from "../../../lib/REQUEST_API";
import { GET_AUTH_INFO_SAGA, setAuthInfoName } from "../../redux/auth";

function* getAuthInfo() {
	try {
		const REQUEST_URL = AUTH.GET_USER_NAME_BY_ACCESS();
		const HTTP_METHOD = methodType.GET;

		const res = yield call(requestApiWithoutBodyWithToken, HTTP_METHOD, REQUEST_URL);

		yield put(setAuthInfoName(res.data.email));

		console.log(res);
	} catch (error) {
		console.log(error);
	}
}

function* authSaga() {
	yield takeEvery(GET_AUTH_INFO_SAGA, getAuthInfo);
}

export default authSaga;

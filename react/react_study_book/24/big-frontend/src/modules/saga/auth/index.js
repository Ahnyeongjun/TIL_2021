import { call, put, takeEvery } from "redux-saga/effects";
import { AUTH } from "../../../lib/API";
import { methodType, requestApiWithoutBodyWithToken, requestTokenWithToken } from "../../../lib/REQUEST_API";
import { GET_AUTH_INFO_SAGA, setAuthInfoName } from "../../redux/auth";
import { useDispatch, useSelector } from "react-redux";

function* getAuthInfo() {
	const REQUEST_URL = AUTH.GET_USER_NAME_BY_ACCESS();
	const HTTP_METHOD = methodType.GET;
	try {
		const res = yield call(requestApiWithoutBodyWithToken, HTTP_METHOD, REQUEST_URL);

		yield put(setAuthInfoName(res.data.email));

		console.log(`res`);
		console.log(res);
	} catch (error) {
		console.log(error);
		// const catchRes = yield call(requestTokenWithToken, HTTP_METHOD, "/user/refresh");

		// console.log(`catchRes`)
		// console.log(catchRes)

		// window.localStorage.setItem("accessToken", catchRes.data.accessToken);

		// requestApiWithoutBodyWithToken(HTTP_METHOD, REQUEST_URL).then((res2) => {
		// 	put(setAuthInfoName(res2.data.email))
		// });

		// requestTokenWithToken(
		// 	"get",
		// 	"/user/refresh",
		// 	{},
		// ).then((res) => {
		// 	console.log(res.data.accessToken);
		// 	window.localStorage.setItem("accessToken", res.data.accessToken);
		// 		requestApiWithoutBodyWithToken(HTTP_METHOD, REQUEST_URL).then((res2) => {
		// 		put(setAuthInfoName(res2.data.email))
		// 	});
		// });
	}
}

function* authSaga() {
	yield takeEvery(GET_AUTH_INFO_SAGA, getAuthInfo);
}

export default authSaga;

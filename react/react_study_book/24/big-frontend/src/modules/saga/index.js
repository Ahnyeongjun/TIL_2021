import { all } from "redux-saga/effects";
import accountSaga from './account';
import loginSaga from './login'
function* rootSaga() {
	yield all([
		loginSaga(),
		accountSaga()
	]);
}

export default rootSaga;

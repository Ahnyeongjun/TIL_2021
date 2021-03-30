import axios from "axios";
import { loginConstant } from "../modules/action/login";

const BASE_URL = "http://localhost:5000";

const ACCESS_TOKEN_NAME = "access-token";
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";
const REFRESH_TOKEN_NAME = "refresh-token";

export const methodType = {
	GET: "get",
	DELETE: "delete",
	POST: "post",
	PUT: "put",
	PATCH: "patch",
};

export const requestApiWithBodyWithoutToken = async (method, url, body, header) => {
	try {
		const res = await axios[method](BASE_URL + url, body, {
			headers: {
				...header,
			},
		});

		return res;
	} catch (error) {
		throw error.response;
	}
};

export const requestApiWithoutBodyWithoutToken = async (method, url, header) => {
	try {
		const res = await axios[method](BASE_URL + url, {
			headers: {
				...header,
			},
		});

		return res;
	} catch (error) {
		throw error.response;
	}
};

export const requestApiWithoutBodyWithToken = async (method, url, header) => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

		const res = await axios[method](BASE_URL + url, {
			headers: {
				[ACCESS_TOKEN_NAME]: accessToken,
				...header,
			},
		});

		console.log(res);

		return res;
	} catch (error) {
		console.log(error.response);

		throw error.response;
	}
};

export const requestApiWithBodyWithToken = async (method, url, body, header) => {
	try {
		const accessToken = window.localStorage.getItem(ACCESS_TOKEN);

		const res = await axios[method](BASE_URL + url, body, {
			headers: {
				[ACCESS_TOKEN_NAME]: accessToken,
				...header,
			},
		});

		return res;
	} catch (error) {
		console.log(error.response);

		throw error.response;
	}
};

export const requestTokenWithToken = async (method, url, header) => {
	try {
		const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);

		const res = await axios[method](BASE_URL + url, {
			headers: {
				[REFRESH_TOKEN_NAME]: refreshToken,
				...header,
			},
		});

		console.log(res);

		return res;
	} catch (error) {
		console.log(error.response);

		throw error.response;
	}
};

export const requestApi = async (method, url, body, headers) => {
	try {
		const res = await axios[method](BASE_URL + url, body, {
			headers
		});

		return res;
	} catch (err) {
		console.log(err);
		if (!err.response) {
			alert("네트워크 상태를 확인해 주세요");
			throw null;
		}
		throw err.response.status;
	}
};

export const checkIsLogin = async () => {
	try {
		const accessToken = window.localStorage.getItem("accessToken");
		await axios.get(
			BASE_URL + "/user/token",
			{
				headers: {
					["access-token"]: accessToken
				}
			}
		);

		return true;
	} catch (err) {
		return false;
	}
};

export const checkPageWithLogin = () => {
	checkIsLogin().then(isLogin => {
		if (!window.localStorage.getItem(REFRESH_TOKEN)) {
			alert("로그인이 필요한 서비스입니다.");
			window.location.href = "/t/";
		} else if (!isLogin) {
			requesetRefresh();
		}
	});
};


export const requesetRefresh = async callback => {
	try {
		const refreshToken = window.localStorage.getItem(REFRESH_TOKEN);
		const res = await requestGetApi(`/saturn/auth/access-token`, {
			[ACCESS_TOKEN_NAME]: refreshToken
		});
		window.localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
		window.location.href = window.location.href;
	} catch (err) {
		if (err === 403) {
			alert("인증이 만료되어 재인증이 필요합니다.");
			window.localStorage.clear();
			window.location.href = "/t/";
			if (callback) {
				callback();
			}
		}
	}
};

export const requestGetApi = async (url, headers) => {
	try {
		const res = await axios.get(BASE_URL + url, {
			headers
		});

		return res;
	} catch (err) {
		if (!err.response) {
			alert("네트워크 상태를 확인해 주세요");
			throw null;
		}
		throw err.response.status;
	}
};
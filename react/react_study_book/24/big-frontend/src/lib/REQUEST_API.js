import axios from "axios";

const BASE_URL = "http://localhost:5000";

const ACCESS_TOKEN_NAME = "access-token";
const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

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

export const Logout = () => {
	try {
		!!window.localStorage.getItem(ACCESS_TOKEN) && window.localStorage.removeItem(ACCESS_TOKEN);
		!!window.localStorage.getItem(REFRESH_TOKEN) && window.localStorage.removeItem(REFRESH_TOKEN);
	} catch (error) {
		console.log(error);
	} finally {
		window.location.href("/");
	}
};

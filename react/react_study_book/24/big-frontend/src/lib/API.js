export const AUTH = {
	GET_USER_NAME_BY_ACCESS: () => {
		return `/user/check`;
	},
	LOG_IN: () => {
		return `/user/login`;
	},
	GET_ACCESS_BY_REFRESH: () => {
		return `/user/refresh`;
	},
	Register: () => {
		return `/user/register`;
	},
	DELETE_USER: () => {
		return `/uesr/delete`;
	},
	TOKEN: () => {
		return '/user/token';
	}
};

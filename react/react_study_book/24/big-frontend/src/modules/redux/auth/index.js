export const SET_AUTH_INFO_NAME = "auth/SET_AUTH_INFO_NAME";

export const GET_AUTH_INFO_SAGA = "auth/GET_AUTH_INFO_SAGA";

export const setAuthInfoName = (payload) => ({
	type: SET_AUTH_INFO_NAME,
	payload,
});

export const getAuthInfoSaga = () => ({
	type: GET_AUTH_INFO_SAGA,
});

const initialState = {
	username: "",
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_INFO_NAME: {
			return { ...state, username: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default authReducer;

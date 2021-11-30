import {
  SET_IS_ACCOUNTED,
  SET_LOGIN_ERROR,

  SET_SIGN_UP_ERROR
} from "../../action/account";

const initialState = {
  name: "",
  isAccounted: false,
  loginError: "",
  signupError: "",
  pwChangeError: "",
  authenticateError: ""
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_IS_ACCOUNTED: {
      return {
        ...state,
        isAccounted: action.payload
      };
    }
    case SET_LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload
      };
    }
    case SET_SIGN_UP_ERROR: {
      return {
        ...state,
        signupError: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default accountReducer;

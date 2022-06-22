import {
  LOGIN_SUCCESS,
  GET_USER_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
} from "../constants";

const initialState = {
  isAuthenticated: false,
  users: [],
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading:true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading:false,
        users: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading:false,
        users: [],
      };
    default:
      return state;
  }
};

export default authReducer;

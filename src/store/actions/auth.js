import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants";
export const login = (payload) => {
  return { type: LOGIN_REQUEST, payload };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const logOut = (payload) => {
  return { type: LOGOUT_REQUEST, payload };
};

export const logOutSuccess = (payload) => {
  return { type: LOGOUT_SUCCESS, payload };
};

export const getUser = (payload) => {
  return { type: GET_USER_REQUEST, payload };
};

export const getUserSuccess = (payload) => {
  return { type: GET_USER_SUCCESS, payload };
};

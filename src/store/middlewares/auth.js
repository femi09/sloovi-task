import { all, put, call, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUEST } from "../constants";
import AuthService from "../../services/auth";

import { getUser, loginSuccess, logOutSuccess } from "../actions/auth";
import { LOGOUT_REQUEST } from "./../constants/index";

function* loginTask(action) {
  const { payload: data } = action;
  try {
    const response = yield call(AuthService.login, data);
    const token = response?.data?.results.token;
    localStorage.setItem("access_token", token);
    yield put(loginSuccess());
    yield put(getUser(token));
    setTimeout(() => {
        window.location.replace("/");
    }, 3000)
   
  } catch (error) {
    console.log(error.response);
  }
}

function* logoutTask(action) {
  try {
    localStorage.clear();
    yield put(logOutSuccess());
    window.location.replace("/login");
  } catch (error) {
    console.log(error.response);
  }
}
export default function* watchLoginTask() {
  yield all([
    takeEvery(LOGIN_REQUEST, loginTask),
    takeEvery(LOGOUT_REQUEST, logoutTask),
  ]);
}

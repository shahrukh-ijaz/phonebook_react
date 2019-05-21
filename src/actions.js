import { login, register } from "./utils/APIClient";

export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
const registerUserSuccess = data => {
  return {
    type: REGISTER_USER_SUCCESS,
    user: data
  };
};
const loginUserSuccess = data => {
  return {
    type: LOGIN_USER_SUCCESS,
    token: data
  };
};

export const loginUserAction = user => {
  return dispatch => {
    const data = {
      username: user.username,
      password: user.password
    };
    login(data).then(response => {
      localStorage.setItem("token", response.token);
      dispatch(loginUserSuccess(response));
    });
  };
};

export const registerUserAction = user => {
  return dispatch => {
    const data = {
      username: user.username,
      password: user.password,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name
    };
    register(data).then(response => {
      dispatch(registerUserSuccess(response));
    });
  };
};

import { GET_USER, LOGOUT, CHECK_USER_FAIL } from "../types";
import API from "../../utils/API";
import { setAlert } from "./alertActions";

const options = {
  header: { "Content-Type": "application/json" },
};

export const signUpAction = (email, password) => async (dispatch) => {
  const body = {
    email,
    password,
  };

  const url = "/auth/signup";
  try {
    const res = await API.post(url, body, options);
    dispatch({ type: GET_USER, payload: res.data.user });
    console.log(res.data.user);
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
  }
};

export const loginAction = (email, password) => async (dispatch) => {
  console.log("LOGIN");
  const body = {
    email,
    password,
  };

  const url = "/auth/login";
  try {
    const res = await API.post(url, body, options);
    dispatch({ type: GET_USER, payload: res.data.user });
    console.log(res);
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
  }
};

export const logOutAction = () => async (dispatch) => {
  const url = "/auth/logout";
  try {
    await API.get(url);
    dispatch({ type: LOGOUT });
  } catch (err) {
    dispatch(setAlert(err.response.data.message));
  }
};

export const checkUserAction = () => async (dispatch) => async (dispatch) => {
  const url = "/auth/checkuser";
  try {
    let res = await API.get(url);
    dispatch({ type: GET_USER, payload: res.data.user });
  } catch (err) {
    dispatch({ type: CHECK_USER_FAIL });
  }
};

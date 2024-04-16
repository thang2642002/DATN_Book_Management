import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "./type";
import axios from "axios";
export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const fetchAllUser = () => {
  return async (dispatch, setState) => {
    dispatch(fetchUserRequets());
    try {
      const res = await axios.get("http://localhost:5000/users/all");
      let data = res && res.data ? res.data : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUserError());
    }
  };
};

export const fetchUserRequets = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    dataUser: payload,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

export const createNewUser = (email, password, username) => {
  return async (dispatch, setState) => {
    dispatch(createUserRequets());
    try {
      let res = await axios.post("http://localhost:5000/users/create", {
        email,
        password,
        username,
      });
      if (res && res.data.errCode === 0) {
        dispatch(createUserSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      console.log(error);
      dispatch(CREATE_USER_ERROR(error));
    }
  };
};

export const createUserRequets = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

export const createUserSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  };
};

export const createUserError = (error) => {
  return {
    type: CREATE_USER_ERROR,
    error,
  };
};

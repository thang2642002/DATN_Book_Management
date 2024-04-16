import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from "../aciton/type";

const INITIAL_STATE = {
  listUser: [],
  isLoading: false,
  isError: false,
  isCreating: false,
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      console.log("FETCH_USER_REQUEST: ", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USER_SUCCESS:
      console.log("FETCH_USER_SUCCESS: ", action);
      return {
        ...state,
        listUser: action.dataUser,
        isLoading: false,
        isError: false,
      };

    case FETCH_USER_ERROR:
      console.log("FETCH_USER_ERROR: ", action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };

    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };
    default:
      return state;
  }
};

export default UserReducer;

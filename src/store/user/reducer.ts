import {
  GET_USERS_REQUEST,
  GET_USERS_REQUEST_SUCCESS,
  GET_USERS_REQUEST_FAILED,
} from "../../constants/actionTypes";
import { Reducer } from "redux";
import { UserState } from "./types";

const initialState: UserState = {
  users: [],
  error: undefined,
  loading: false,
  totalCount: 0,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.items,
        totalCount: action.payload.total_count,
      };

    case GET_USERS_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { reducer as UserReducer };

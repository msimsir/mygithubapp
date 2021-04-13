import {
  GET_USERS_REQUEST,
  GET_USERS_REQUEST_SUCCESS,
  GET_USERS_REQUEST_FAILED,
} from "../../constants/actionTypes";
import {
  User,
  UserFailedGetRequestAction,
  UserGetRequestAction,
  UserSuccessGetRequestAction,
} from "./types";

export const getUserRequest = (): UserGetRequestAction => {
  return { type: GET_USERS_REQUEST };
};

export const getUserRequestSuccess = (
  totalCount: number,
  users: User[]
): UserSuccessGetRequestAction => {
  return { type: GET_USERS_REQUEST_SUCCESS, payload: { totalCount, users } };
};

export const getUserRequestFailed = (
  error: string
): UserFailedGetRequestAction => {
  return { type: GET_USERS_REQUEST_FAILED, payload: error };
};

export const getUsersBySearch = (filter: string) => async (dispatch: any) => {
  try {
    dispatch(getUserRequest());

    const { total_count, items } = await fetch(
      `https://api.github.com/search/users?q=${filter}&type=user`
    ).then((respone) => respone.json());
    dispatch({
      type: GET_USERS_REQUEST_SUCCESS,
      payload: { total_count, items },
    });
  } catch (error) {
    dispatch({ type: GET_USERS_REQUEST_FAILED, payload: error });
  }
};

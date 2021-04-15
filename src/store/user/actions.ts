import {
  GET_USERS_REQUEST,
  GET_USERS_REQUEST_SUCCESS,
  GET_USERS_REQUEST_FAILED,
  GET_USER_REQUEST,
  GET_USER_REQUEST_SUCCESS,
  GET_USER_REQUEST_FAILED,
  GET_USER_REPOS_REQUEST,
  GET_USER_REPOS_REQUEST_SUCCESS,
  GET_USER_REPOS_REQUEST_FAILED,
} from "../../constants/actionTypes";

export const getUsersBySearch = (filter: string) => async (dispatch: any) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });

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

export const getOneUserBySelected = (filter: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: GET_USER_REQUEST });
    const data = await fetch(
      `https://api.github.com/users/${filter}`
    ).then((response) => response.json());
    dispatch({ type: GET_USER_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_REQUEST_FAILED, payload: error });
  }
};

export const getUserReposBySelected = (filter: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: GET_USER_REPOS_REQUEST });
    const data = await fetch(
      `https://api.github.com/users/${filter}/repos`
    ).then((response) => response.json());
    dispatch({ type: GET_USER_REPOS_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_REPOS_REQUEST_FAILED, payload: error });
  }
};

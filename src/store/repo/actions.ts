import {
  GET_REPOS_REQUEST,
  GET_REPOS_REQUEST_SUCCESS,
  GET_REPOS_REQUEST_FAILED,
} from "../../constants/actionTypes";
import {
  Repo,
  RepoFailedGetRequestAction,
  RepoGetRequestAction,
  RepoSuccessGetRequestAction,
} from "./types";

export const getRepoRequest = (): RepoGetRequestAction => {
  return { type: GET_REPOS_REQUEST };
};

export const getRepoRequestSuccess = (
  totalCount: number,
  repos: Repo[]
): RepoSuccessGetRequestAction => {
  return { type: GET_REPOS_REQUEST_SUCCESS, payload: { totalCount, repos } };
};

export const getRepoRequestFailed = (
  error: string
): RepoFailedGetRequestAction => {
  return { type: GET_REPOS_REQUEST_FAILED, payload: error };
};

export const getReposBySearch = (filter: string) => async (dispatch: any) => {
  try {
    dispatch(getRepoRequest());
    const { total_count, items } = await fetch(
      `https://api.github.com/search/repositories?q=${filter}&type=repository`
    ).then((respone) => respone.json());
    dispatch({
      type: GET_REPOS_REQUEST_SUCCESS,
      payload: { total_count, items },
    });
  } catch (error) {
    dispatch({ type: GET_REPOS_REQUEST_SUCCESS, payload: error });
  }
};

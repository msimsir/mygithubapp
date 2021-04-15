import {
  GET_REPOS_REQUEST,
  GET_REPOS_REQUEST_SUCCESS,
  GET_REPOS_REQUEST_FAILED,
  GET_REPO_CONTENT_REQUEST,
  GET_REPO_CONTENT_REQUEST_SUCCESS,
  GET_REPO_CONTENT_REQUEST_FAILED,
  GET_REPO_REQUEST,
  GET_REPO_REQUEST_SUCCESS,
  GET_REPO_REQUEST_FAILED,
  GET_BRANCH_COUNT_REQUEST,
  GET_BRANCH_COUNT_REQUEST_FAILED,
  GET_BRANCH_COUNT_REQUEST_SUCCESS,
  GET_PULL_COUNT_REQUEST,
  GET_PULL_COUNT_REQUEST_SUCCESS,
  GET_PULL_COUNT_REQUEST_FAILED,
} from "../../constants/actionTypes";

export const getReposBySearch = (filter: string) => async (dispatch: any) => {
  try {
    dispatch({ type: GET_REPOS_REQUEST });
    const { total_count, items } = await fetch(
      `https://api.github.com/search/repositories?q=${filter}&type=repository`
    ).then((response) => response.json());
    dispatch({
      type: GET_REPOS_REQUEST_SUCCESS,
      payload: { total_count, items },
    });
  } catch (error) {
    dispatch({ type: GET_REPOS_REQUEST_FAILED, payload: error });
  }
};

export const getRepoContentBySelected = (filter: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: GET_REPO_CONTENT_REQUEST });
    const data = await fetch(
      `https://api.github.com/repos/${filter}/contents/README.md`
    ).then((response) => response.json());
    dispatch({
      type: GET_REPO_CONTENT_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_REPO_CONTENT_REQUEST_FAILED, payload: error });
  }
};

export const getOneRepoBySelected = (filter: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: GET_REPO_REQUEST });
    const data = await fetch(
      `https://api.github.com/repos/${filter}`
    ).then((response) => response.json());
    dispatch({
      type: GET_REPO_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_REPO_REQUEST_FAILED, payload: error });
  }
};

export const getBranchCountBySelected = (filter: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: GET_BRANCH_COUNT_REQUEST });
    const data = await fetch(
      `https://api.github.com/repos/${filter}/branches`
    ).then((response) => response.json());
    dispatch({
      type: GET_BRANCH_COUNT_REQUEST_SUCCESS,
      payload: data.length,
    });
  } catch (error) {
    dispatch({ type: GET_BRANCH_COUNT_REQUEST_FAILED, payload: error });
  }
};

export const getPullCountBySelected = (filter: string) => async (
  dispatch: any
) => {
  try {
    dispatch({ type: GET_PULL_COUNT_REQUEST });
    const data = await fetch(
      `https://api.github.com/repos/${filter}/pulls`
    ).then((response) => response.json());
    dispatch({
      type: GET_PULL_COUNT_REQUEST_SUCCESS,
      payload: data.length,
    });
  } catch (error) {
    dispatch({ type: GET_PULL_COUNT_REQUEST_FAILED, payload: error });
  }
};

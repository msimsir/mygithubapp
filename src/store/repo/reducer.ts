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
import { Reducer } from "redux";
import { RepoState } from "./types";

const initialState: RepoState = {
  repos: [],
  error: undefined,
  loading: false,
  totalCount: 0,
  selectedRepo: undefined,
  repoContent: undefined,
  branchCount: 0,
  pullCount: 0,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
    case GET_REPO_CONTENT_REQUEST:
    case GET_REPO_REQUEST:
    case GET_BRANCH_COUNT_REQUEST:
    case GET_PULL_COUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_REPOS_REQUEST_FAILED:
    case GET_REPO_CONTENT_REQUEST_FAILED:
    case GET_REPO_REQUEST_FAILED:
    case GET_BRANCH_COUNT_REQUEST_FAILED:
    case GET_PULL_COUNT_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_REPOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload.items,
        totalCount: action.payload.total_count,
      };

    case GET_REPO_CONTENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        repoContent: action.payload,
      };

    case GET_REPO_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedRepo: action.payload,
      };

    case GET_BRANCH_COUNT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        branchCount: action.payload,
      };

    case GET_PULL_COUNT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        pullCount: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export { reducer as RepoReducer };

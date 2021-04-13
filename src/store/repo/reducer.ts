import {
  GET_REPOS_REQUEST,
  GET_REPOS_REQUEST_SUCCESS,
  GET_REPOS_REQUEST_FAILED,
} from "../../constants/actionTypes";
import { Reducer } from "redux";
import { RepoState } from "./types";

const initialState: RepoState = {
  repos: [],
  error: undefined,
  loading: false,
  totalCount: 0,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_REPOS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        repos: action.payload.items,
        totalCount: action.payload.total_count,
      };

    case GET_REPOS_REQUEST_FAILED:
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

export { reducer as RepoReducer };

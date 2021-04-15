import {
  ADD_TO_BOOKMARK,
  REMOVE_BOOKMARK,
} from "../../constants/actionTypes";
import { Reducer } from "redux";
import { BookmarkState } from "./types";
import { Repo } from "../repo/types";

const initialState: BookmarkState = {
  bookmarks: [],
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark: Repo) => bookmark.id !== action.payload.id
        ),
      };

    default:
      return {
        ...state,
      };
  }
};

export { reducer as BookmarkReducer };

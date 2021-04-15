import {
  ADD_TO_BOOKMARK,
  REMOVE_BOOKMARK,
} from "../../constants/actionTypes";
import { Repo } from "../repo/types";

export const addToBookmark = (repo: Repo) => {
  return { type: ADD_TO_BOOKMARK, payload: repo };
};

export const removeBookmark = (repo: Repo) => {
  return { type: REMOVE_BOOKMARK, payload: repo };
};
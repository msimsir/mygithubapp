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
import { Repo } from "../repo/types";

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: false;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error?: string;
  totalCount: number;
  selectedUser: User | undefined;
  userRepos: Repo[];
}

export interface UserGetRequestAction {
  type: typeof GET_USERS_REQUEST;
}

export interface UserSuccessGetRequestAction {
  type: typeof GET_USERS_REQUEST_SUCCESS;
  payload: { totalCount: number; users: User[] };
}

export interface UserFailedGetRequestAction {
  type: typeof GET_USERS_REQUEST_FAILED;
  payload: string;
}

export interface UserGetOneRequestAction {
  type: typeof GET_USER_REQUEST;
}

export interface UserSuccessGetOneAction {
  type: typeof GET_USER_REQUEST_SUCCESS;
  payload: Repo;
}

export interface UserFailedGetOneAction {
  type: typeof GET_USER_REQUEST_FAILED;
  payload: string;
}

export interface UserGetUserRepoRequestAction {
  type: typeof GET_USER_REPOS_REQUEST;
}

export interface UserSuccessGetUserRepoAction {
  type: typeof GET_USER_REPOS_REQUEST_SUCCESS;
  payload: Repo;
}

export interface UserFailedGetUserRepoAction {
  type: typeof GET_USER_REPOS_REQUEST_FAILED;
  payload: string;
}

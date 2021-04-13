import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { RepoReducer } from "./repo/reducer";
import { RepoState } from "./repo/types";
import { UserReducer } from "./user/reducer";
import { UserState } from "./user/types";

const rootReducer = combineReducers({
  repo: RepoReducer,
  user: UserReducer,
});

export interface RootState {
  repo: RepoState;
  user: UserState;
}

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

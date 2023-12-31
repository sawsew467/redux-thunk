import { combineReducers } from "redux";
import postsReducer from "./reducers/posts";

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;

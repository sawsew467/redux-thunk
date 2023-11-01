import { combineReducers } from "redux";
import commentsReducer from "./reducers/commentsReducer";
import dishesReducer from "./reducers/dishesReducer";
import postsReducer from "./reducers/posts";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  dishes: dishesReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import commentsReducer from "./reducers/commentsReducer";
import dishesReducer from "./reducers/dishesReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  dishes: dishesReducer,
});

export default rootReducer;

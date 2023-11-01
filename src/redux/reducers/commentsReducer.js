import { commentsTypes } from "../ActionTypes/commentsTypes.js";

const initialState = {
  data: [],
  isLoading: false
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.FETCH_ALL_COMMENTS:
      console.log(action.payload);
      return { ...state, data: action.payload };
      
    case commentsTypes.ADD_NEW_COMMENT:
      return { ...state, data: [...state.data, action.payload] };

    case commentsTypes.LOAD_USERS_LOADING:
      return { ...state, isLoading: action.payload };


    default:
      return state;
  }
};

export default commentsReducer;

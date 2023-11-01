import { postsTypes } from "../ActionTypes/postsTypes";

const initialState = {
  initialState: [],
  isLoading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsTypes.FETCH_ALL_POSTS:
      console.log(action.payload);
      return { ...state, data: action.payload };

    case postsTypes.ADD_NEW_POST:
      return { ...state, data: [...state.data, action.payload] };

    case postsTypes.LOAD_POSTS_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

export default postsReducer;

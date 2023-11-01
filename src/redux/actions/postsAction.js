import { getAllPosts, addPost } from "../../apis/index.js";
import { postsTypes } from "../ActionTypes/postsTypes.js";

export const fetchAllPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: postsTypes.LOAD_POSTS_LOADING,
      payload: true,
    });
    const res = await getAllPosts();
    dispatch({
      type: postsTypes.FETCH_ALL_POSTS,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({
      type: postsTypes.LOAD_POSTS_LOADING,
      payload: false,
    });
  }
};

export const addNewPost = (data) => async (dispatch) => {
  try {
    dispatch({
      type: postsTypes.LOAD_POSTS_LOADING,
      payload: true,
    });
    const res = await addPost(data);
    dispatch({
      type: postsTypes.ADD_NEW_POST,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({
      type: postsTypes.LOAD_POSTS_LOADING,
      payload: false,
    });
  }
};

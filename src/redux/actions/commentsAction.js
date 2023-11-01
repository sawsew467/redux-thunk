import { getAllComments, addComment } from "../../apis/index.js";
import { commentsTypes } from "../ActionTypes/commentsTypes.js";

export const fetchAllComments = () => async (dispatch) => {
  try {
    dispatch({
      type: commentsTypes.LOAD_USERS_LOADING,
      payload: true,
    });
    const res = await getAllComments();
    dispatch({
      type: commentsTypes.FETCH_ALL_COMMENTS,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({
      type: commentsTypes.LOAD_USERS_LOADING,
      payload: false,
    });
  }
};

export const addNewComment = (data) => async (dispatch) => {
  try {
    dispatch({
      type: commentsTypes.LOAD_USERS_LOADING,
      payload: true,
    });
    const res = await addComment(data);
    dispatch({
      type: commentsTypes.ADD_NEW_COMMENT,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  } finally {
    dispatch({
      type: commentsTypes.LOAD_USERS_LOADING,
      payload: false,
    });
  }
};

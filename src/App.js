import "./App.css";
import { useEffect, useState } from "react";
import { getAllComments } from "./apis";
import { useDispatch, useSelector } from "react-redux";
import { commentsSelector } from "./redux/selectors";
import {
  addNewComment,
  fetchAllComments,
} from "./redux/actions/commentsAction";

function App() {
  const { data, isLoading } = useSelector(commentsSelector);
  const [comment, setComment] = useState({
    id: "",
    comment: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllComments());
  }, []);

  const handleSubmit = async () => {
    dispatch(addNewComment(comment));
    setComment({
      id: comment.length,
      comment: "",
    });
  };

  return (
    <>
      <input
        placeholder="Enter comment..."
        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        value={comment.comment}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {data?.map((comment) => (
            <div key={comment?.id}>
              <p>{comment?.comment}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;

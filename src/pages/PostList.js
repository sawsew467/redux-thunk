import moment from "moment";
import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../redux/actions/postsAction";

function PostList() {
  const { data, isLoading } = useSelector((state) => state.posts);
  console.log(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: 100,
          gap: 20,
        }}
      >
        {" "}
        {isLoading ? (
          <p>loading...</p>
        ) : (
          data
            ?.filter((post) => post?.status)
            .map((post) => (
              <Card style={{ width: "40rem" }} key={post.id}>
                <Card.Header>
                  <i class="fa-solid fa-user"></i> {post.author}
                </Card.Header>
                <Card.Body>
                  {post.tags.map((tag) => (
                    <Badge bg="secondary" className="me-2">
                      {tag}
                    </Badge>
                  ))}
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {moment(post.timestamp).format("LLL")}
                  </small>
                </Card.Footer>
              </Card>
            ))
        )}
      </div>
    </>
  );
}

export default PostList;

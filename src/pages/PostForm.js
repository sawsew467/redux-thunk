import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../redux/actions/postsAction";

function PostForm() {
  const {isLoading} = useSelector((state) => state.posts)

  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    tags: "",
    status: true,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = {
      ...form,
      tags: form.tags.split(","),
      timestamp: new Date(),
    };

    dispatch(addNewPost(post));
  };

  return (
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
      <Card style={{ width: "40rem" }}>
        <Card.Header as="h5">
          <Form.Text>Create a new post</Form.Text>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter content"
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tags"
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
              />
              <Form.Text className="text-muted">Ex: Java, SQL Server</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Public this post"
                checked={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.checked })}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              // onClick={!isLoading ? handleSubmit : null}
            >
              {isLoading ? "Loading…" : "Click to submit"}
            </Button>
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostForm;

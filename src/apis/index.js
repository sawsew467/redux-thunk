export const getAllComments = async () => {
  return fetch("http://localhost:3001/comments")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addComment = async (comment) => {
  return fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getAllPosts = async () => {
  return fetch("http://localhost:3001/posts")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addPost = async (post) => {
  return fetch("http://localhost:3001/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

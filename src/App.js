import "./App.css";
import { Route, Routes } from "react-router";
import PostForm from "./pages/PostForm";
import PostList from "./pages/PostList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route element={<PostList></PostList>} path="/"></Route>
        <Route element={<PostList></PostList>} path="/post-list"></Route>
        <Route element={<PostForm></PostForm>} path="/post-form"></Route>
      </Routes>
    </>
  );
}

export default App;

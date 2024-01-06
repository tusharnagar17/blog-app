import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState("tushar");
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
    likes: "",
  });
  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  const LoginForm = () => {
    const handleLogin = (e) => {
      e.preventDefault();
      const cred = {
        username,
        password,
      };
      // loginService.login(cred);
      console.log(username, password);
    };
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username :</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <label htmlFor="password">Password :</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  const NoteForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
    };
    const BlogInput = (e) => {
      const { name, value } = e.target;
      setNewBlog({ ...newBlog, [name]: value });
    };
    return (
      <div>
        <h2>Add a Blog</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title : </label>{" "}
          <input
            type="text"
            name="title"
            id="title"
            value={newBlog.title}
            onChange={BlogInput}
          />
          <br />
          <label htmlFor="author">author : </label>{" "}
          <input
            type="text"
            name="author"
            id="author"
            value={newBlog.author}
            onChange={BlogInput}
          />
          <br />
          <label htmlFor="url">url : </label>{" "}
          <input
            type="text"
            name="url"
            id="url"
            value={newBlog.url}
            onChange={BlogInput}
          />
          <br />
          <label htmlFor="likes">likes : </label>{" "}
          <input
            type="text"
            name="likes"
            id="likes"
            value={newBlog.likes}
            onChange={BlogInput}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  console.log(blogs);

  return (
    <div>
      {user === "" ? LoginForm() : NoteForm()}
      {blogs.map((note) => (
        <Blog blog={note} />
      ))}
    </div>
  );
};

export default App;

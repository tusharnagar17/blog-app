import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import ErrorMessage from "./components/ErrorMsg";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import Toggable from "./components/Toggable";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const [user, setUser] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
    console.log("userEffect", blogs);
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      // console.log("called at useEffect", user);
      setUser(user.name);
      console.log("username added as: ", user.name);
      blogService.setToken(user.token);
    } else {
      console.log("no data in window.localStorage");
    }
  }, [setBlogs]);

  const handleBlogSubmit = async (newBlog) => {
    console.log("here is new blog");
    console.log(newBlog);
    console.log("noteform clicked!", newBlog);
    const data = await blogService.create(newBlog);
    console.log(data);
    setBlogs([...blogs, data]);
  };
  const handleLogin = async (credentials) => {
    // comment for sometime

    console.log("handleLogin Clicked!!!", credentials);

    const loginRequest = await loginService.login(credentials);

    if (!loginRequest) {
      setErrorMsg("Unable to login");
    }
    window.localStorage.setItem(
      "loggedNoteappUser",
      JSON.stringify(loginRequest)
    );
    setUser(loginRequest.name);
    console.log("loginRequest user", loginRequest);
    console.log("successfully Logged In");
    blogService.setToken(loginRequest.token);
  };

  const LogoutButton = () => {
    const handleClick = () => {
      window.localStorage.removeItem("loggedNoteappUser");

      setUser("");
      // console.log(user);
    };
    return <button onClick={handleClick}>Log Out</button>;
  };

  return (
    <div>
      {!user && (
        <div>
          <Toggable name="login">
            <LoginForm handleLogin={handleLogin} />
          </Toggable>
          <br />
        </div>
      )}

      {user && (
        <>
          {user} is logged in <LogoutButton />
          <Toggable name="add a blog">
            <BlogForm handleBlogSubmit={handleBlogSubmit} />
          </Toggable>
          {blogs.map((note) => (
            <Blog blog={note} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;

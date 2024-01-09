import { useState } from "react";
import React from "react";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />{" "}
        <br />
        <label htmlFor="password">Password :</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

import React, { useState, useEffect } from "react";

const BlogForm = ({ handleBlogSubmit }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    url: "",
    likes: "",
  });

  const newBlogInput = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before handleBlogSubmit!");
    handleBlogSubmit(newBlog);

    setNewBlog({
      title: "",
      author: "",
      url: "",
      likes: "",
    });
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
          onChange={newBlogInput}
        />
        <br />
        <label htmlFor="author">author : </label>{" "}
        <input
          type="text"
          name="author"
          id="author"
          value={newBlog.author}
          onChange={newBlogInput}
        />
        <br />
        <label htmlFor="url">url : </label>{" "}
        <input
          type="text"
          name="url"
          id="url"
          value={newBlog.url}
          onChange={newBlogInput}
        />
        <br />
        <label htmlFor="likes">likes : </label>{" "}
        <input
          type="text"
          name="likes"
          id="likes"
          value={newBlog.likes}
          onChange={newBlogInput}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;

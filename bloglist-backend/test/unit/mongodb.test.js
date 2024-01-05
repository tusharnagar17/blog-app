// import
const supertest = require("supertest");
const mongoose = require("mongoose");
const express = require("express");
const blogs = require("./../../routes/api/blogs");
const Blog = require("./../../models/blogModel");
const config = require("./../../utils/config");

//variable
const app = express();
const api = supertest(app);

describe("mongo test", () => {
  beforeAll(() => {
    app.use("/api/blogs", blogs);

    mongoose
      .connect(config.MONGODB_URL)
      .then(() => {
        console.log("Connected Success!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
  test("get Request", async () => {
    const response = await api.get("/api/blogs");
    expect(response.status).toBe(200);
  });

  test("Post request", async () => {
    const newBlog = {
      title: "tushar's life",
      author: "tushar nagar",
      url: "tushar.com",
      likes: 123,
    };
    const response = (await api.post("/api/blogs")).send(newBlog);
    expect(response.status).toEqual(201);
    expect(response.body).toEqual(newBlog);
  });
});

// tests
// describe("mongo connect", () => {
//   test("succesfully connect", async () => {
//     await api
//       .get("/api/blogs")
//       .expect(200)
//       .expect("Content-Type", /application\/json/);
//   }, 10000);
// });

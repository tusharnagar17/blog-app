const express = require("express");
const router = express.Router();
const Blog = require("../../models/blogModel");
const logger = require("../../utils/logger");
const middleware = require("./../../utils/middleware");
const jwt = require("jsonwebtoken");
const config = require("./../../utils/config");
const User = require("./../../models/userModel");

router.use(middleware.tokenExtractor);
// GET request
router.get("/", async (req, res) => {
  try {
    const data = await Blog.find({}).populate("user");

    return res.status(200).json(data);
  } catch (error) {
    logger.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// POST request
router.post("", async (req, res) => {
  try {
    const { title, author, url, likes } = req.body;
    const decodedToken = await jwt.verify(req.token, config.JWT_SECRET);

    if (!decodedToken.id) {
      res.status(400).send({ error: "Token Invalid!" });
    }
    const user = await User.findById(decodedToken.id);

    if (!title || !author || !url || !likes) {
      res.status(400).send({
        message: "Kindly fill details: title, author, url, likes",
      });
    }

    const newBlog = {
      title: title,
      author: author,
      url: url,
      likes: likes,
      user: user.id,
    };

    const data = await Blog.create(newBlog);

    if (!user.blogs || !Array.isArray(user.blogs)) {
      user.blogs = []; // Initialize it as an array if it's undefined or not an array
    }

    // Add savedNote._id to user.blogs if it's not already included
    if (!user.blogs.includes(user.id)) {
      user.blogs.push(user.id); // Add the ID to the array
    }
    user.blogs = user.blogs.concat(data.id);

    return res.status(201).json({ userdetail: user, blogDetail: data });
  } catch (error) {
    logger.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;

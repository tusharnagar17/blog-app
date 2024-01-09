const testingRouter = require("express").Router();
const Blog = require("./../models/blogModel");
const User = require("./../models/userModel");

testingRouter.post("/reset", async (req, res) => {
  try {
    await Blog.deleteMany({}).limit(1);
    await User.deleteMany({}).limit(1);

    res.status(204).send({ message: "successfully delete all the data" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = testingRouter;

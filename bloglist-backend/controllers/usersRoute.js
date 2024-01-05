const userRouter = require("express").Router();
const User = require("./../models/userModel");
const logger = require("./../utils/logger");
const bcrypt = require("bcrypt");
const middleware = require("./../utils/middleware");
// const uniqueValidator = require('mongoose-unique-validator')

// GET request
userRouter.get("/", async (req, res) => {
  try {
    const data = await User.find({}).populate("blogs");

    return res.status(200).json(data);
  } catch (error) {
    logger.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// POST request

userRouter.post("/", async (req, res) => {
  try {
    const { username, name, password } = req.body;

    if (!(username && name && password)) {
      res
        .status(400)
        .send({ message: "Kindly filled : username, name, password" });
    }
    // use bcrypt password => don't use plain password in database.
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      username: username,
      name: name,
      password: passwordHash,
    };
    const createdUser = await User.create(newUser);
    return res.status(201).json(createdUser);
  } catch (error) {
    logger.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = userRouter;

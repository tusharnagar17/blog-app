const loginRouter = require("express").Router();
const User = require("./../models/userModel");
const logger = require("./../utils/logger");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../utils/config");
// const uniqueValidator = require('mongoose-unique-validator')

loginRouter.get("/", async (req, res) => {
  res.status(200).json({ message: "successfully reached to /login page" });
});

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!(username && password)) {
      return res
        .status(400)
        .json({ message: "you haven't filled all fields!" });
    }
    const user = await User.findOne({ username });

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({ error: "invalid username or password" });
    }
    const userForToken = {
      username: user.username,
      id: user.id,
    };

    const token = jwt.sign(userForToken, config.JWT_SECRET, {
      expiresIn: 60 * 60 * 2,
    });
    // this token valid for2 hour == 1 hour[60sec*60] * 2

    res
      .status(200)
      .send({ token: token, username: user.username, name: user.name });
  } catch (error) {
    logger.info(error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = loginRouter;

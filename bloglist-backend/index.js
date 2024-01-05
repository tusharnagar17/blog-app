const express = require("express");
const app = express();
const config = require("./utils/config");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
const blogs = require("./routes/api/blogsRoute");
const cors = require("cors");
const userRouter = require("./controllers/usersRoute");
const loginRouter = require("./controllers/loginRoute");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to / endpoint Tushar",
  });
});

app.use("/api/blogs", blogs);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    logger.info("Succesfully connected to MongoDB: ");
    app.listen(config.PORT, () => {
      logger.info("App is listening to PORT", config.PORT);
    });
  })
  .catch((error) => {
    logger.info(error.message);
    logger.error({ error: error.message });
  });

require("dotenv").config();
const config = require("./config");

const info = (...params) => {
  if (config.NODE_ENV != "test") {
    console.log(...params);
  }
};

const error = (...params) => {
  if (config.NODE_ENV != "test") {
    console.log(...params);
  }
};

module.exports = {
  info,
  error,
};

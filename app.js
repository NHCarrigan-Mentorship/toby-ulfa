const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

module.exports = app;

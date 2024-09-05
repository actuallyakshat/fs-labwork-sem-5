const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World! My name is Akshat Dubey. Does this work");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

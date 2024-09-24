const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

const { dbConnect } = require("./config/dbConnect");
const indexRouter = require("./routes/indexRouter");

dbConnect();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! Does this work?");
});

app.use("/api/v1/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

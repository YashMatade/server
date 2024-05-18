const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("<h1>Yash</h1>");
});

app.get("/web", (req, res) => {
  res.send("<h2>Yash And Yash</h2>");
});
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

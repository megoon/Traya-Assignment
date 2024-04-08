const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`\nServer is successfully running on ${PORT} port`);
});

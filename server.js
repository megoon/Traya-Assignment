const express = require("express");
const app = express();

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, HOST, () => {
  console.log(`\nServer is successfully running on ${PORT} port`);
});

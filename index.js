import 'dotenv/config'
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vijay");
});

app.get("/login", (req, res) => {
  res.send("This is the login page");
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});

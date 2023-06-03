require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;
const expressLayouts = require("express-ejs-layouts");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static('public'));

// Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (req, res) => {
  console.log(`App listening on ${PORT}`);
});

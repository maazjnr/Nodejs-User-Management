require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;
const expressLayouts = require("express-ejs-layouts");
const connectDb = require('./server/config/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDb(); 

// Static Files
app.use(express.static('public'));

// Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

//Routes
app.use('/', require('./server/routes/customer'))

app.get('*', (req, res) => {
    res.render('404')
})
 

app.listen(PORT, (req, res) => {
  console.log(`App listening on ${PORT}`);
});

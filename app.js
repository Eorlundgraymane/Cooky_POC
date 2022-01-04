//IMPORTS

//Express
const express = require("express");
//Path
const path = require("path");

//Inits

//Express App
const app = express();

//Set View Engines
app.set("view engine", "ejs");
app.set("views", "views");

//Set App PORT number
const PORT = process.env.PORT || 3000;

//Express Pre-requisites
app.use(express.urlencoded({ extended: false }));

//Set Public Static Files
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, "public")));

//Routes
const errorRoutes = require("./routes/404");
const homeRoutes = require("./routes/home");

//Use Routes
app.use(homeRoutes);
app.use(errorRoutes);//Keep Error Routes LAST!

//Server Listen
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Our app is running on port ${ PORT }`);
});

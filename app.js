//IMPORTS

//Express
const express = require("express");
//Path
const path = require("path");

// //SQL Inits
// const sequelize = require("./util/database");
// const Ingredient = require("./models/ingredient");
// const Recipe = require("./models/recipe");
// const RecipeIngredient = require("./models/recipeIngredient");

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
app.use('/js', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static(path.join(__dirname, "public")));

//Routes
const errorRoutes = require("./routes/404");
const homeRoutes = require("./routes/home");
const recipeRoutes = require("./routes/recipeFunctions");

//Use Routes
app.use(recipeRoutes);
app.use(homeRoutes);
app.use(errorRoutes);//Keep Error Routes LAST!

//DB Relations
// Recipe.hasMany(Ingredient);
// Ingredient.belongsToMany(Recipe,{through : RecipeIngredient});

// //Sync DB 
// sequelize.sync().then(() => {
//     //Server Listen
//     app.listen(PORT,'0.0.0.0', () => {
//         console.log(`Cooky app is running on port ${ PORT }`);
//     });
// });

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Cooky app is running on port ${ PORT }`);
});


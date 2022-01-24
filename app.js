//IMPORTS

//Express
const express = require("express");
//Path
const path = require("path");

//SQL Inits
const sequelize = require("./util/database");
const Ingredient = require("./models/ingredient");
const Recipe = require("./models/recipe");
const RecipeIngredient = require("./models/recipeIngredient");

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
app.use('/font', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')))
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
Ingredient.belongsToMany(Recipe,{through : RecipeIngredient});

//Sync DB 
sequelize
.sync()
.then((result) => {
    return Ingredient.findByPk(1);
}).then((ingredient) => {
    console.log(ingredient);
    if(!ingredient){
        return Ingredient.create({
            title:"Potato",
            description:"Bland versatile root vegetable"
        });      
    }
    return Promise.resolve(ingredient);
}).then(() => {
    return Recipe.findByPk(1);
}).then((recipe) => {
    console.log(recipe);
    if(!recipe){
        return Recipe.create({
            title:"Boiled Potato",
            description:"Just boil the potato in a pot of boiling water and salt"
        });
    }
    return Promise.resolve(recipe);
}).then(()=>{
    return RecipeIngredient.findByPk(1);
}).then((recipeIngredient) => {
    console.log(recipeIngredient);
       if(!recipeIngredient){
           return RecipeIngredient.create({
               recipeId:1,
               ingredientId:1
           });
       } 
       return Promise.resolve(recipeIngredient);

}).then((recipeIngredient) => {
    //Server Listen
    app.listen(PORT,'0.0.0.0', () => {
        console.log(`Cooky app is running on port ${ PORT }`);
    });
});



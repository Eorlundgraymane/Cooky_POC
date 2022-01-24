const Recipe = require("../models/recipe");
const RecipeIngredient = require("../models/recipeIngredient");
const Ingredient = require("../models/ingredient");

exports.getIndex = (req,res,next) => {
    console.log("Home Controller Get Index");
    Ingredient.findAll()
    .then((ingredients) => {
        res.render("create/index",{
            path: "create",
            pageTitle: "Cooky Creator",
            ingredients: ingredients
        });
    })
    .catch((err) => {
        console.log(err);
    });    
};

exports.postRecipe = (req,res,next) => {
    console.log("Home Controller Get Index");
    console.log(req);
    Recipe.create({
        title:req.body.recipeTitleText,
        description:req.body.recipeDescription,        
    })
    .then((recipe) => {
        req.body.ingredientList.split(',').forEach(ingredient => {
            Ingredient.findOne({where : {title:ingredient}})
            .then((ing) => {
                RecipeIngredient.create({
                    recipeId: recipe.id,
                    ingredientId: ing.id
                }).then((ingr) => {
                    console.log("Recipe Inserted");
                    Ingredient.findAll()
                    .then((ingredients) => {
                        res.render("create/index",{
                            path: "create",
                            pageTitle: "Cooky Creator",
                            ingredients: ingredients
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });    
                })
                .catch((err) => {
                    console.log(err);
                });
            })
            .catch((err) => {
                console.log(err);
            }); 
        });        
    })
    .catch((err) => {
        console.log(err);
    }); 

};
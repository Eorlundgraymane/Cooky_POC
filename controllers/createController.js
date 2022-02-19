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
    if(/^\s*$/.test(req.body.recipeTitleText) || /^\s*$/.test(req.body.recipeDescription) || /^\s*$/.test(req.body.ingredientList)){
        return res.status(500);
    }
    else{
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
                            return res.status(500);
                        });    
                    })
                    .catch((err) => {
                        console.log(err);
                        return res.status(500);
                    });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500);
                }); 
            });        
        })
        .catch((err) => {
            console.log(err);
            return res.status(500);
        }); 
    }    
};
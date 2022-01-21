const Recipe = require("../models/recipe");

exports.getIndex = (req,res,next) => {
    Recipe.findAll()
    .then((recipes) => {
        res.render("follow/index",{
            recipes: recipes,
            path: "recipe/follow",
            pageTitle: "Cooky Maker"        
        });
    })
    .catch((err) => {
        console.log(err);
    });
};

exports.getRecipe = (req,res,next) => {
    const recipeId = req.params.id;
    Recipe.findByPk(recipeId)
    .then((recipe) => {
        res.render("follow/content",{
            recipe: recipe,
            path: "recipe/follow/content",
            pageTitle: recipe.title        
        });
    })
    .catch((err) => {
        console.log(err);
    });
};

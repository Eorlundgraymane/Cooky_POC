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

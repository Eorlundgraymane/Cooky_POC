const Sequelize =  require('sequelize');

const sequelize = require('../util/database');

const RecipeIngredient = sequelize.define('recipeingredient',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    recipeId: {
        type:Sequelize.INTEGER,        
        allowNull: false,
        primaryKey: true
    },
    ingredientId: {
        type:Sequelize.INTEGER,        
        allowNull: false,
        primaryKey: true
    }
});

module.exports = RecipeIngredient;
const Sequelize =  require('sequelize');

const sequelize = require('../util/database');

const RecipeIngredient = sequelize.define('recipeingredient',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = RecipeIngredient;
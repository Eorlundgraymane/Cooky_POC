const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cooky-poc", "root", "rokoSQL@235", {
  dialect: "mysql",    
  host:'localhost'  
});

module.exports = sequelize;
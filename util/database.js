const { Sequelize } = require("sequelize");
const DATABASE_URL = "ulsq0qqx999wqz84.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";


// const sequelize = new Sequelize("cooky-poc", "root", "rokoSQL@235", {
//   dialect: "mysql",    
//   host:'localhost'  
// });

const sequelize = new Sequelize("whk5evemig1wljrb", "infs8oq2zsh1c5hi", "g05fs039g36aqnp9 ", {
  dialect: "mysql",
  port:3306,
  database:'whk5evemig1wljrb',  
  host:DATABASE_URL
});


module.exports = sequelize;
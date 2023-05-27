require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const Character = require("./models/Character")
const Favorite = require("./models/Favorite")

const sequelize = new Sequelize(
   `postgresql://postgres:aeSbLHNwYJOqTbKIMDDa@containers-us-west-188.railway.app:7039/railway`,
   { logging: false, native: false }
);

/* const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
); */

//Model Implementation
Character(sequelize);
Favorite(sequelize);



module.exports = {
   ...sequelize.models,
   sequelize,
};

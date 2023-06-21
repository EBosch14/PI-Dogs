const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config;
const DogsModel = require("./models/Dogs");
const TemperamentsModel = require("./models/Temperaments");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

//MODELS
DogsModel(sequelize);
TemperamentsModel(sequelize);

//Associations
const { Dogs, Temperaments } = sequelize.models;
Dogs.belongsToMany(Temperaments, {
  through: "Dogs_Temperaments",
  timestamps: false,
});
Temperaments.belongsToMany(Dogs, {
  through: "Dogs_Temperaments",
  timestamps: false,
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

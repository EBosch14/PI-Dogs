const { Sequelize } = require("sequelize");
require("dotenv").config;
const DogsModel = require("./models/Dogs");
const TemperamentsModel = require("./models/Temperaments");

// const { DB_PORT, DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const {DB_URL} = process.env

// const sequelize = new Sequelize(
//   `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   {
//     logging: false,
//   }
// );

const sequelize = new Sequelize(
  `${DB_URL}`,
  {
    logging: false,
  }
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

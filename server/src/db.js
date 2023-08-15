const { Sequelize } = require("sequelize");
require("dotenv").config;
const DogsModel = require("./models/Dogs");
const TemperamentsModel = require("./models/Temperaments");

// const { DB_PORT, DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const { DB_URL, NODE_ENV, DB_HOST, DB_USER, DB_NAME, DB_PASS, DB_PORT } =
  process.env;

function initDB() {
  if (NODE_ENV === "DEV") {
    return new Sequelize(
      `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      {
        logging: false,
      }
    );
  } else {
    return new Sequelize(DB_URL, {
      logging: false,
    });
  }
}

const sequelize = initDB();

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

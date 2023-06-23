const { Temperaments } = require("../db");

const getAllTempsDB = async () => {
  //collects all temperaments stored in DB
  const temps = await Temperaments.findAll();
  const cleanTemps = temps.map((el) => el.dataValues.name);
  return cleanTemps;
};

module.exports = { getAllTempsDB };

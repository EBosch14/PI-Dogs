const { Op } = require("sequelize");
const { Temperaments } = require("../db");

const getAllTempsDB = async (temps = null) => {
  //collects all temperaments stored in DB
  try {
    if (!temps) {
      const allTemps = await Temperaments.findAll();
      const cleanTemps = allTemps.map((el) => el.dataValues.name);
      return cleanTemps;
    }
    if (Array.isArray(temps)) {
      const foundsTemps = await Temperaments.findAll({
        where: {
          name: {
            [Op.or]: temps,
          },
        },
      });
      return foundsTemps;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllTempsDB };

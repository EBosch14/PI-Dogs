const { Temperaments } = require("../db");
const { createTempsDB } = require("../services/createTempsDB");
const { fliterTemps } = require("../utils/filterTemps");

const getAllTemps = async () => {
  try {
    //Get temperaments from API
    const tempsAPI = await fliterTemps();
    //collects all temperaments stored in DB
    const DBTemps = await Temperaments.findAll({
      attributes: ["name"],
    });
    if (!DBTemps.length) {
      //If DB is empty, load all temperaments
      await createTempsDB(tempsAPI);
    } else if (DBTemps.length < tempsAPI.length) {
      //If API loads new temperaments, the DB is updated
      const existTempsDB = DBTemps.map((el) => el.dataValues.name);
      const newTempsAPI = tempsAPI.filter((el) => !existTempsDB.includes(el));
      if (newTempsAPI.length) await createTempsDB(newTempsAPI);
    }
    //returns all temperaments from API
    return tempsAPI;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllTemps };

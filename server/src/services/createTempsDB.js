const {Temperaments} = require("../db")

const createTempsDB = async (temps) => {
  //Insert a new instance of the model to the DB
  try {
    const info = temps.map((temp) => ({ name: temp }));
    return await Temperaments.bulkCreate(info);
  } catch (error) {
    throw new Error("Failed to create new temperaments in DB. ", error.message);
  }
};

module.exports = { createTempsDB };

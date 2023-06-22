const createTempsDB = async (tempsAPI) => {
  //Insert a new instance of the model to the DB
  try {
    const info = tempsAPI.map((temp) => ({ name: temp }));
    return await Temperaments.bulkCreate(info);
  } catch (error) {
    throw new Error("Failed to create new temperaments in DB. ", error);
  }
};

module.exports = { createTempsDB };

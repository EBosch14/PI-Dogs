const { Dogs } = require("../db");
const { getAllTempsDB } = require("./reqTempsDB");

const createDogsDB = async ({
  name,
  image,
  height,
  weight,
  lifeSpan,
  temperaments,
}) => {
  try {
    const dog = await Dogs.create({
      name,
      image,
      height: `${height} cm`,
      weight: `${weight} kg`,
      life_span: lifeSpan,
    });
    //associating temperaments with dogs
    const temps = temperaments.split(", ");
    const foundsTemps = await getAllTempsDB(temps);
    if (foundsTemps.length) dog.addTemperaments(foundsTemps);
    else {
      //pending....
    }
    return [dog, { associatedTemps: !!foundsTemps.length }];
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createDogsDB };

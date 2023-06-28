const { getOneDog } = require("../services/reqDogsDB");

const validateInfo = async (info) => {
  try {
    const requiredFields = [
      "name",
      "image",
      "height",
      "weight",
      "lifeSpan",
      "temperaments",
    ];
    const missingData = [];
    for (const field of requiredFields) {
      if (!info[field]) missingData.push(field);
    }
    if (missingData.length) {
      throw new Error(`Missing data: ${missingData.join(", ")}.`);
    }
    const alreadyExist = await getOneDog(info.name);
    if (!!alreadyExist) {
      throw new Error(
        `this name: '${info.name}' is alredy exists, please try another.`
      );
    }

    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = { validateInfo };

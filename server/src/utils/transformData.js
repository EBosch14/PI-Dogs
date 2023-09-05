const { fetchImage } = require("./fetchingDataAPI");

const cleanDataAPI = async (dogs) => {
  return await Promise.all(
    dogs.map(async (dog) => {
      const image_url = await fetchImage(dog.reference_image_id);
      return {
        weight: `${dog.weight.metric} kg`,
        height: `${dog.height.metric} cm`,
        name: dog.name,
        life_span: dog.life_span,
        Temperaments: dog.temperament?.split(", ") ?? [],
        origin: dog.origin ?? "",
        image: image_url,
        id: dog.id,
      };
    })
  );
  
};

const transformDataDB = (data) => {
  //
  if (Array.isArray(data) && data.length) {
    const transformedData = data.map((dog) => ({
      ...dog.toJSON(),
      Temperaments: dog.Temperaments.map((temp) => temp.name),
    }));
    return transformedData;
  }
  if (typeof data === "object" && Object.keys(data).length) {
    return {
      ...data.toJSON(),
      Temperaments: data.Temperaments.map((temp) => temp.name),
    };
  }
  return [];
};

module.exports = { cleanDataAPI, transformDataDB };

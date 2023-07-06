const transfromDataAPI = (data) => {
  if (Array.isArray(data)) {
    const transformedData = data.map((breed) => ({
      ...breed,
      Temperaments: breed.temperament ? breed.temperament.split(", ") : [],
      image: breed.image.url,
      height: `${breed.height.metric} cm`,
      weight: `${breed.weight.metric} kg`,
      temperament: undefined,
      reference_image_id: undefined
    }));
    return transformedData;
  }
  if (typeof data === "object" && Object.keys(data).length) {
    return {
      ...data,
      Temperaments: data.temperament ? data.temperament.split(", ") : [],
      temperament: undefined,
      reference_image_id: undefined
    };
  }
  return [];
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

module.exports = { transfromDataAPI, transformDataDB };

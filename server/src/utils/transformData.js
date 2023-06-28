const transfromDataAPI = (data) => {
  if (Array.isArray(data)) {
    const transformedData = data.map((breed) => ({
      ...breed,
      Temperaments: breed.temperament ? breed.temperament.split(", ") : [],
      image: breed.image.url,
      height: breed.height.metric,
      weight: breed.weight.metric,
      temperament: undefined,
      reference_image_id: undefined
    }));
    return transformedData;
  }
  if (Object.keys(data).length) {
    return {
      ...data,
      Temperaments: data.temperament ? data.temperament.split(", ") : [],
      temperament: undefined,
      reference_image_id: undefined
    };
  }
  return {};
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
  if (Object.keys(data).length) {
    return {
      ...data.toJSON(),
      Temperaments: data.Temperaments.map((temp) => temp.name),
    };
  }
  return {};
};

module.exports = { transfromDataAPI, transformDataDB };

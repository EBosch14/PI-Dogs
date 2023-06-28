const transfromDataAPI = (data) => {
  if (Array.isArray(data)){
    const transformedData = data.map((breed) => ({
      ...breed,
      Temperaments: breed.temperament ? breed.temperament.split(", ") : [],
      temperament: undefined,
    }));
    return transformedData;
  } else {
    return {
      ...data,
      Temperaments: data.temperament ? data.temperament.split(", ") : [],
      temperament: undefined,
    }
  }
};

const transformDataDB = (data) => {
  const transformedData = data.map(dog => ({
    ...dog.toJSON(),
    Temperaments: dog.Temperaments.map(temp => temp.name)
  }))
  return transformedData
}

module.exports = { transfromDataAPI, transformDataDB };

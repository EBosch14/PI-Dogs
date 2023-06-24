const fliterTemps = (dogs) => {
  const temps = dogs
    //returns an array with the temperaments separated and 
    //filters the dogs that do not have the property "temperaments"
    .flatMap((dog) => dog.temperament?.split(",") || [])
    //remove blank spaces
    .map((temp) => temp.trim())
  
    //removes duplicate temperaments
  return [...new Set(temps)];
};

module.exports = { fliterTemps };

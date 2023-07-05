const fliterTemps = (dogs) => {
  //this is deprecated filter
  // const temps = dogs
  //   //returns an array with the temperaments separated and 
  //   //filters the dogs that do not have the property "temperaments"
  //   .flatMap((dog) => dog.temperament?.split(",") || [])
  //   //remove blank spaces
  //   .map((temp) => temp.trim())
  
  const temps = dogs.flatMap(dog => dog.Temperaments)

    //removes duplicate temperaments
  return [...new Set(temps)];
};

module.exports = { fliterTemps };

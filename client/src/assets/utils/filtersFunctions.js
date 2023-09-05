const uuidv4Pattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const getWeight = (weight) => {
  const firstWeight = /(\d+)/;
  const found = weight.match(firstWeight);

  if (found) {
    return parseInt(found[1]);
  } else {
    return null;
  }
};

const orderByAZ = (state) => {
  return state.sort((a, b) => a.name.localeCompare(b.name));
};

const orderByZA = (state) => {
  return state.sort((a, b) => b.name.localeCompare(a.name));
};

const orderByAscWeight = (state) => {
  return state.sort((a, b) => {
    // const weightA = [parseInt(a.weight.split(" - ")[0])];
    // const weightB = [parseInt(b.weight.split(" - ")[0])];
    const weightA = getWeight(a.weight);
    const weightB = getWeight(b.weight);

    if (weightA === null && weightB === null) return 0;
    if (weightA === null) return 1;
    if (weightB === null) return -1;
    return weightA - weightB;
  });
};

const orderByDescWeight = (state) => {
  return state.sort((a, b) => {
    // const weightA = [parseInt(a.weight.split(" - ")[0])];
    // const weightB = [parseInt(b.weight.split(" - ")[0])];
    const weightA = getWeight(a.weight);
    const weightB = getWeight(b.weight);

    if (weightA === null && weightB === null) return 0;
    if (weightB === null) return 1;
    if (weightA === null) return -1;
    return weightB - weightA;
  });
};

const filterByTemps = (state, temps) => {
  return state.filter((el) => {
    return temps.every((temp) => el.Temperaments.includes(temp));
  });
};

const filterFromAPI = (state) => {
  return state.filter((el) => !uuidv4Pattern.test(el.id));
};

const filterFromDB = (state) => {
  return state.filter((el) => uuidv4Pattern.test(el.id));
};

const filterByName = (state, search) => {
  return state.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase()),
  );
};

export {
  orderByAZ,
  orderByZA,
  orderByAscWeight,
  orderByDescWeight,
  filterByTemps,
  filterFromAPI,
  filterFromDB,
  filterByName,
};

const numberPositive = /^\d*\.?\d+$/;
const validName = /^[A-Za-z\s]+$/;
const namesExists = [
  {
    name: "enzo",
  },
  {
    name: "chino",
  },
  {
    name: "tumina",
  },
  {
    name: "mamasita",
  },
];

export function validateForm(inputs, firstInputs) {
  const errors = {};
  const alreadyExist = namesExists.find(
    (el) => el.name.toLowerCase() === inputs.name.toLowerCase().trim(),
  );

  //LifeSpan validations
  if (firstInputs.current.lifeSpan) {
    firstInputs.current.lifeSpan = inputs.lifeSpan === "";
  } else if (inputs.lifeSpan === "") {
    errors.lifeSpan = "This field is required.";
  } else if (!numberPositive.test(inputs.lifeSpan)) {
    errors.lifeSpan = "It must be a positive number.";
  }

  //Height validations
  if (firstInputs.current.height) {
    firstInputs.current.height = inputs.height === "";
  } else if (inputs.height === "") {
    errors.height = "This field is required.";
  } else if (!numberPositive.test(inputs.height)) {
    errors.height = "It must be a positive number.";
  }

  //Weight validations
  if (firstInputs.current.weight) {
    firstInputs.current.weight = inputs.weight === "";
  } else if (inputs.weight === "") {
    errors.weight = "This field is required.";
  } else if (!numberPositive.test(inputs.weight)) {
    errors.weight = "It must be a positive number.";
  }

  //Name validations
  if (firstInputs.current.name) {
    firstInputs.current.name = inputs.name === "";
  } else if (inputs.name === "") {
    errors.name = "This field is required.";
  } else if (!validName.test(inputs.name)) {
    errors.name = "Numbers are not allowed.";
  } else if (alreadyExist) {
    errors.name = "This name is already exists.";
  }

  //Temperaments validations
  if (firstInputs.current.temperaments) {
    firstInputs.current.temperaments = inputs.temperaments === "";
  } else if (inputs.temperaments === "") {
    errors.temperaments = "This field is required.";
  }

  //Image validations
  if (firstInputs.current.image) {
    firstInputs.current.image = inputs.image === "";
  } else if (inputs.image === "") {
    errors.image = "This field is required.";
  }

  return errors;
}

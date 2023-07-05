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

export function validateForm(inputs) {
  const errors = {};
  const alreadyExist = namesExists.find(
    (el) => el.name.toLowerCase() === inputs.name.toLowerCase().trim(),
  );

  if (inputs.lifeSpan !== "" && !numberPositive.test(inputs.lifeSpan))
    errors.lifeSpan = "It must be a positive number.";
  if (inputs.height !== "" && !numberPositive.test(inputs.height))
    errors.height = "It must be a positive number.";
  if (inputs.weight !== "" && !numberPositive.test(inputs.weight))
    errors.weight = "It must be a positive number.";
  if (inputs.name !== "" && !validName.test(inputs.name))
    errors.name = "Numbers are not allowed.";
  if (alreadyExist) errors.name = "This name is already exists.";
  if (inputs.temperaments === "")
    errors.temperaments = "This field is required.";
  if (inputs.image === "") errors.image = "This field is required.";

  return errors;
}

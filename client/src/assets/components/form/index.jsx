import s from "./form.module.css";
import { useEffect, useState } from "react";
import CustomInput from "../customInput";
import SelectTempField from "../customSelect";
import CustomImageUpload from "../customImageUpload";
import { validateForm } from "../../utils/validateForm";
import { uploadDog } from "../../services/fetchingAPI";

export default function CustomForm() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    lifeSpan: "",
    image: "",
    height: "",
    weight: "",
    temperaments: "",
  });

  const resetAllSelect = () => {
    setSelectedOptions([]);
  };

  const resetAllInputs = () => {
    setInputs({
      name: "",
      lifeSpan: "",
      image: "",
      height: "",
      weight: "",
      temperaments: "",
    });
  }

  const handleSumbit = async (event) => {
    event.preventDefault();
    if (setFormComplete) {
      try {
        const cleanInputs = {
          ...inputs,
          name: inputs.name.trim(),
        };
        const res = await uploadDog(cleanInputs);
        if (res) {
          resetAllInputs()
          resetAllSelect()
          alert("Your doggie was successfully created")
        }
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleInput = (event) => {
    const valueInput = event.target.value;
    const nameInput = event.target.name;

    //prevent spaces key
    if (nameInput !== "name") {
      if (event.key === " ") event.preventDefault();
    }

    if (nameInput !== "name" && valueInput.length <= 7) {
      setInputs((prevState) => ({
        ...prevState,
        [nameInput]: valueInput,
      }));
    } else if (nameInput === "name" && valueInput.length <= 30) {
      setInputs((prevState) => ({
        ...prevState,
        [nameInput]: valueInput,
      }));
    }
  };

  const handleInputFileChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;
    if (fileType === "image/png" || fileType === "image/jpeg") {
      const fileURL = URL.createObjectURL(file);
      setInputs((prevState) => ({
        ...prevState,
        image: fileURL,
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        image: "You can only upload images in .png or .jpg format.",
      }));
    }
  };

  const deleteImage = () => {
    setInputs((prevState) => ({
      ...prevState,
      image: "",
    }));
  };

  const handleSelect = (selectedTemps) => {
    setInputs((prevState) => ({
      ...prevState,
      temperaments: selectedTemps.join(", "),
    }));
  };

  useEffect(() => {
    setErrors(validateForm(inputs));
  }, [inputs]);

  useEffect(() => {
    setFormComplete(
      Object.values(inputs).every((el) => el !== "") &&
        Object.keys(errors).length === 0,
    );
  }, [errors]);

  return (
    <form className={s.form} onSubmit={handleSumbit}>
      <CustomInput
        label={"Choose the name"}
        name={"name"}
        type={"text"}
        onChange={handleInput}
        inputs={inputs}
        errors={errors}
      />
      <CustomInput
        label={"How old will be?"}
        name={"lifeSpan"}
        type={"number"}
        onChange={handleInput}
        inputs={inputs}
        errors={errors}
        span={"years"}
      />
      <CustomInput
        label={"Give it a height"}
        name={"height"}
        type={"number"}
        onChange={handleInput}
        inputs={inputs}
        errors={errors}
        span={"cm"}
      />
      <CustomInput
        label={"How heavy will it be?"}
        name={"weight"}
        type={"number"}
        onChange={handleInput}
        inputs={inputs}
        errors={errors}
        span={"kg"}
      />
      <SelectTempField
        label={"How will your dog be"}
        name={"temperaments"}
        handleSelect={handleSelect}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        errors={errors}
      />
      <CustomImageUpload
        label={"Show us a picture of your dog"}
        name={"image"}
        onChange={handleInputFileChange}
        inputs={inputs}
        errors={errors}
        deleteImage={deleteImage}
      />
      <button className={s.sumbitBtn} type="submit" disabled={!formComplete}>
        CREATE!
      </button>
    </form>
  );
}

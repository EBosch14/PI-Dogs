import s from "./form.module.css";
import { useEffect, useRef, useState } from "react";
import CustomInput from "../customInput";
import SelectTempField from "../customSelect";
import CustomImageUpload from "../customImageUpload";
import { validateForm } from "../../utils/validateForm";
import { uploadDog } from "../../services/fetchingAPI";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions/payloads";

export default function CustomForm() {
  //Redux state
  const dispatch = useDispatch()
  const allDogs = useSelector(state => state.dogs.dogs)

  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])

  //From Hooks
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [formComplete, setFormComplete] = useState(false);
  const firstInputs = useRef({
    name: true,
    lifeSpan: true,
    image: true,
    height: true,
    weight: true,
    temperaments: true,
  });

  const [inputs, setInputs] = useState({
    name: "",
    lifeSpan: "",
    image: {},
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
      image: {},
      height: "",
      weight: "",
      temperaments: "",
    });
  };

  const resetAllRef = () => {
    firstInputs.current = {
      name: true,
      lifeSpan: true,
      image: true,
      height: true,
      weight: true,
      temperaments: true,
    };
  };

  useEffect(() => {
    setErrors(validateForm(inputs, firstInputs, allDogs));
    console.log(formComplete);
  }, [inputs]);

  useEffect(() => {
    setFormComplete(
      Object.entries(inputs).every(([prop, value]) => value !== "") &&
        Object.keys(errors).length === 0,
    );
  }, [errors]);

  const handleSumbit = async (event) => {
    event.preventDefault();
    if (setFormComplete) {
      try {
        const cleanInputs = {
          ...inputs,
          name: inputs.name.trim(),
          image: inputs.image.file
        };
        const res = await uploadDog(cleanInputs);
        if (res) {
          resetAllInputs();
          resetAllSelect();
          resetAllRef();
          alert("Your doggie was successfully created");
        }
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
      if (event.key === "-" || event.key === " ") event.preventDefault();
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
      const image = {file, fileURL}
      setInputs((prevState) => ({
        ...prevState,
        image,
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

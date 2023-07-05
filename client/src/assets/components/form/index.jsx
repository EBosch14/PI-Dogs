import s from "./form.module.css";
import { useState } from "react";
import CustomInput from "../customInput";
import SelectTempField from "../customSelect";
import CustomImageUpload from "../customImageUpload";

export default function CustomForm() {
  //const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedFile, setSelectedFile] = useState({
    name: "",
    image: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    temperaments: "",
    image: "",
  });
  const handleSumbit = (event) => {
    event.preventDefault();
  };

  const handleInput = () => {};

  const handleErrors = (name, error) => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleInputFileChange = (fileName = "", fileImage = "") => {
    setSelectedFile({
      name: fileName,
      image: fileImage,
    });
  };

  return (
    <form className={s.form} onSubmit={handleSumbit}>
      <CustomInput
        label={"Choose the name"}
        name={"name"}
        type={"text"}
        onChange={handleInput}
      />
      <CustomInput
        label={"How old will be?"}
        name={"lifeSpan"}
        type={"number"}
        onChange={handleInput}
        span={"years"}
      />
      <CustomInput
        label={"Give it a height"}
        name={"height"}
        type={"number"}
        onChange={handleInput}
        span={"cm"}
      />
      <CustomInput
        label={"How heavy will it be?"}
        name={"weight"}
        type={"number"}
        onChange={handleInput}
        span={"kg"}
      />
      <SelectTempField label={"How will your dog be"} name={"temperaments"} />
      <CustomImageUpload
        label={"Show us a picture of your dog"}
        name={"image"}
        onChange={handleInputFileChange}
        handleErrors={handleErrors}
        selectedFile={selectedFile}
      />
      <button className={s.sumbitBtn} type="submit">
        CREATE!
      </button>
    </form>
  );
}

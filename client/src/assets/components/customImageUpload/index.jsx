import { useRef } from "react";
import s from "./customImageUpload.module.css";
import { BsUpload } from "react-icons/bs";

export default function CustomImageUpload({
  label,
  name,
  onChange,
  inputs,
  errors,
  deleteImage
}) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    inputs.image === "" && fileInputRef.current.click();
  };

  return (
    <div className={s[name]}>
      <label htmlFor="">{label}</label>
      <div className={s.uploadFile} onClick={handleClick}>
        {!inputs.image ? (
          <BsUpload />
        ) : (
          <img
            src={inputs.image}
            alt={inputs.name}
            className={s.selectedImage}
          />
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        name={name}
        id={name}
        accept=".jpg, .png"
        onChange={onChange}
        hidden
      />
      {inputs.image && (
        <button className={s.deleteImageBtn} onClick={deleteImage}>
          Delete image
        </button>
      )}
      {errors.image !== "" && (
        <span className={s.errorMsg}>{errors.image}</span>
      )}
    </div>
  );
}

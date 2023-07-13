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
    Object.keys(inputs.image).length === 0 && fileInputRef.current.click();
  };

  return (
    <div className={s[name]}>
      <label htmlFor="">{label}</label>
      <div className={s.uploadFile} onClick={handleClick}>
        {!inputs.image.hasOwnProperty('fileURL') ? (
          <BsUpload />
        ) : (
          <img
            src={inputs.image.hasOwnProperty('fileURL') ? inputs.image.fileURL : ""}
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
      {Object.keys(inputs.image).length !== 0 && (
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

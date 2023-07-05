import { useRef } from "react";
import s from "./customImageUpload.module.css";
import { BsUpload } from "react-icons/bs";

export default function CustomImageUpload({
  label,
  name,
  selectedFile,
  onChange,
  handleErrors,
}) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    selectedFile.name === "" && fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;
    const fileName = file.name;
    const fileImage = URL.createObjectURL(file);
    const allowedTypes = ["image/png", "image/jpeg"];
    if (file) {
      if (allowedTypes.includes(fileType)) {
        onChange(fileName, fileImage);
      } else {
        const error =
          "Document format not allowed (only .PNG or .JPG is accepted)";
        handleErrors(name, error);
      }
    } else {
      onChange();
    }
  };

  return (
    <div className={s[name]}>
      <label htmlFor="">{label}</label>
      <div className={s.uploadFile} onClick={handleClick}>
        {!selectedFile.name ? (
          <BsUpload />
        ) : (
          <img
            src={selectedFile.image}
            alt={selectedFile.name}
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
        onChange={handleFileChange}
      />
      {selectedFile.name && (
        <button className={s.deleteImageBtn} onClick={() => onChange()}>
          Delete image
        </button>
      )}
    </div>
  );
}

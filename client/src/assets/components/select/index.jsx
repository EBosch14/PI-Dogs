import { useState, useRef, useEffect } from "react";
import s from "./select.module.css";
import { AiFillCaretDown } from "react-icons/ai";

export default function CustomSelect() {
  const temperaments = [
    "Stubborn",
    "Curious",
    "Playful",
    "Adventurous",
    "Active",
    "Fun-loving",
    "Aloof",
    "Clownish",
    "Dignified",
    "Independent",
    "Happy",
    "Wild",
    "Hardworking",
    "Dutiful",
    "Outgoing",
    "Friendly",
    "Alert",
    "Confident",
    "Intelligent",
    "Courageous",
    "Loyal",
    "Brave",
    "Docile",
    "Responsive",
    "Composed",
    "Receptive",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState("");
  const selectRef = useRef();

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (temp) => {
    setSelected(temp)
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(`.${s.select}`)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className={s.selectContainer} ref={selectRef}>
        <div className={s.select} onClick={handleSelectClick}>
          <AiFillCaretDown />
          <input
            type="text"
            id={s.input}
            placeholder="Select an temperament..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        {(isOpen || isFocused) && (
          <ul className={s.suggestions}>
            {temperaments.map((temp, i) => (
              <li
                className={s.options}
                key={i + temp}
                onClick={() => handleOptionClick(temp)}
              >
                {temp}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selected && <p>{selected}</p>}
    </>
  );
}

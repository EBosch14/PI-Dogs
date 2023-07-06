import { useState, useRef, useEffect } from "react";
import s from "./select.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/actions/payloads";

export default function SelectTempField({
  label,
  name,
  handleSelect,
  errors = {},
  selectedOptions,
  setSelectedOptions,
}) {
  const dispatch = useDispatch()
  const temperaments = useSelector(state => state.temperaments.temperaments)

  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch])
  
  useEffect(() => {
    handleSelect(selectedOptions);
  }, [selectedOptions]);

  const addOption = (temp) => {
    // setSelectedOptions((prevSelected) => [...new Set([...prevSelected, temp])]);
    if (!selectedOptions.find((opt) => opt === temp))
      setSelectedOptions((prevState) => [...prevState, temp]);
  };

  const deleteOption = (opt) => {
    setSelectedOptions((prevState) => prevState.filter((el) => el !== opt));
  };

  return (
    <div className={s[name]}>
      <label htmlFor={name}>{label}</label>
      <CustomSelect temperaments={temperaments} addOption={addOption} />
      {selectedOptions.length > 0 && (
        <div className={s.selectedOptions}>
          {selectedOptions.map((opt, i) => (
            <span className={s.option} key={opt + i}>
              {opt} <RxCross2 onClick={() => deleteOption(opt)} />
            </span>
          ))}
        </div>
      )}
      {errors.temperaments !== "" && (
        <span className={s.errorMsg}>{errors.temperaments}</span>
      )}
    </div>
  );
}

function CustomSelect({ temperaments, addOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const selectRef = useRef();

  const handleSuggestions = (event) => {
    setSearch(event.target.value);
  };

  const options = temperaments.filter((el) =>
    el.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (temp) => {
    addOption(temp);
    setSearch("");
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
    <div className={s.selectContainer} ref={selectRef}>
      <div className={s.select} onClick={handleSelectClick}>
        <AiFillCaretDown />
        <input
          type="text"
          id={s.input}
          placeholder="Select an temperament..."
          onChange={handleSuggestions}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={search}
        />
      </div>
      {(isOpen || isFocused) && options.length > 0 && (
        <ul className={s.suggestions}>
          {options.map((temp, i) => (
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
  );
}

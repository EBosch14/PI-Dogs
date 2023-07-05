import s from "./customInput.module.css";

export default function CustomInput({ label, name, type, span, onChange, errors, inputs }) {
  //console.log(s);
  return (
    <div className={`${s[name]} ${s.fields}`}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={s[name]}
        autoComplete="none"
        onChange={onChange}
        onKeyDown={onChange}
        value={inputs[name]}
      />
      {span && <span>{span}</span>}
      {errors[name] !== "" && <span className={s.errorMsg}>{errors[name]}</span>}
    </div>
  );
}

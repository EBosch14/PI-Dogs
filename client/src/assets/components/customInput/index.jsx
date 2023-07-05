import s from "./customInput.module.css";

export default function CustomInput({ label, name, type, span, onChange }) {
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
      />
      {span && <span>{span}</span>}
    </div>
  );
}

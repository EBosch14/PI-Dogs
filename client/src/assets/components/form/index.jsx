import s from "./form.module.css";
import { BsUpload } from "react-icons/bs";

export default function CustomForm() {
  
  const handleSumbit = (event) => {
    event.preventDefault()
  }

  return (
    <form className={s.form} onSubmit={handleSumbit}>
      <div className={`${s.fields} ${s.name}`}>
        <label htmlFor="name">Choose the name</label>
        <input autoComplete="none" id={s.name} type="text" name="name" />
      </div>
      <div className={`${s.fields} ${s.lifeSpan}`}>
        <label htmlFor="lifeSpan">How old will be?</label>
        <input
          autoComplete="none"
          type="number"
          name="lifeSpan"
          id="lifeSpan"
          min={1}
        />
        <span>years</span>
      </div>
      <div className={`${s.fields} ${s.height}`}>
        <label htmlFor="height">Give it a height</label>
        <input
          autoComplete="none"
          type="number"
          name="height"
          id="height"
          min={1}
        />
        <span>cm</span>
      </div>
      <div className={`${s.fields} ${s.weight}`}>
        <label htmlFor="weight">How heavy will it be?</label>
        <input
          autoComplete="none"
          type="number"
          name="weight"
          id="weight"
          min={1}
        />
        <span>kg</span>
      </div>
      <div className={s.temperaments}>
        <label htmlFor="temperaments">How will your dog be</label>
        <select name="temperaments" id="temperaments">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>
      </div>
      <div className={s.image}>
        <label htmlFor="image">Show us a picture of your dog</label>
        <div className={s.uploadFile}>
          <BsUpload />
        </div>
        <input type="file" name="image" id="image" accept=".jpg, .png" />
      </div>
      <button className={s.sumbitBtn} type="submit">
        CREATE!
      </button>
    </form>
  );
}

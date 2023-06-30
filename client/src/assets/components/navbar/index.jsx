import { Link } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <Link className={s.link}>Create a dog</Link>
      <div className={s.search}>
        <label className={s.label}>Search a Dog</label>
        <input required="" type="text" className={s.input} />
      </div>
      <Link className={s.link}>My favorites</Link>
    </nav>
  );
}

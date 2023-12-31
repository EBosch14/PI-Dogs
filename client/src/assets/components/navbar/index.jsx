import { Link } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar({
  handleShowAll,
  handleChange,
  search,
}) {
  return (
    <nav className={s.navbar}>
      <Link className={s.link} to="/home">
        Go to Home
      </Link>
      <form action="">
        <div className={s.search}>
          <label htmlFor="searchInput" className={s.label}>Search a Dog:</label>
          <input
            id="searchInput"
            value={search}
            onChange={handleChange}
            type="text"
            className={s.input}
          />
          <div className={s.buttons}>
            <button onClick={handleShowAll} className={s.showAllBtn}>
              All dogs
            </button>
          </div>
        </div>
      </form>
      <Link className={s.link} to="/create">
        Create a dog
      </Link>
    </nav>
  );
}

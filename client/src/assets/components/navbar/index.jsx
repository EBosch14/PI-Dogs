import { Link } from "react-router-dom";
import s from "./navbar.module.css";

export default function Navbar({
  handleShowAll,
  handleChange,
  handleSumbit,
  search,
}) {
  return (
    <nav className={s.navbar}>
      <Link className={s.link} to="/home">
        Go to Home
      </Link>
      <form action="" onSubmit={handleSumbit}>
        <div className={s.search}>
          <label className={s.label}>Search a Dog:</label>
          <input
            value={search}
            onChange={handleChange}
            type="text"
            className={s.input}
          />
          <div className={s.buttons}>
            <button className={s.searchBtn} type="submit">
              Go
            </button>
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

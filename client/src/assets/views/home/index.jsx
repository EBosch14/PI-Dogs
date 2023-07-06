import s from "./home.module.css";
import Cards from "../../components/cards";
import Filters from "../../components/filters";

export default function Home({allDogs}) {
  
  return (
    <div className={s.container}>
      <div className={s.filters}>
        <Filters allDogs={allDogs}/>
      </div>
      <Cards allDogs={allDogs}/>
    </div>
  );
}

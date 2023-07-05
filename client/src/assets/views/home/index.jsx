import s from "./home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions/payloads";
import Cards from "../../components/cards";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs.allDogs);
  const [filters, setFilters] = useState()

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Cards allDogs={allDogs}/>
    </div>
  );
}

import { useEffect, useState } from "react";
import SelectTempField from "../customSelect";
import s from "./filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterDogs } from "../../redux/actions/payloads";

export default function Filters() {
  const [selectedTemps, setSelectedTemps] = useState([]);
  const [filters, setFilters] = useState({
    selectedTemps: [],
    orderBy: "azOpt",
    whereFrom: "All",
  });
  const dispatch = useDispatch();


  const handleTempsChange = () => {
    //Temperaments
    dispatch(filterDogs({...filters, selectedTemps}))
    setFilters((prevState) => ({
      ...prevState,
      selectedTemps: selectedTemps,
    }));
  };

  const handleOrderByChange = (event) => {
    //zaOpt || azOpt || ascWeight || descWeight
    const orderBy = event.target.value;
    //console.log(orderBy);
    dispatch(filterDogs({...filters, orderBy}))
    setFilters((prevState) => ({
      ...prevState,
      orderBy: orderBy,
    }));
  };

  const handleWhereFilterChange = (event) => {
    //API || DB || All
    const whereFrom = event.target.value;
    console.log(whereFrom);
    dispatch(filterDogs({...filters, whereFrom}))

    setFilters((prevState) => ({
      ...prevState,
      whereFrom: whereFrom,
    }));
  };

  return (
    <div className={s.filtersContainer}>
      <div className={s.filterTemps}>
        <SelectTempField
          label={"filter by temperaments: "}
          name={"temperaments"}
          handleSelect={handleTempsChange}
          selectedOptions={selectedTemps}
          setSelectedOptions={setSelectedTemps}
        />
      </div>
      <div className={s.filters}>
        <span>filter dogs alphabetically</span>
        <div>
          <div className={s.azOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="filtersDogs"
              id="azOpt"
              value="azOpt"
              onChange={handleOrderByChange}
            />
            <label htmlFor="azOpt">A - Z</label>
          </div>
          <div className={s.zaOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="filtersDogs"
              id="zaOpt"
              value="zaOpt"
              onChange={handleOrderByChange}
            />
            <label htmlFor="zaOpt">Z - A</label>
          </div>
        </div>
      </div>
      <div className={s.filters}>
        <span>filter dogs by weight</span>
        <div>
          <div className={s.ascOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="filtersDogs"
              id="ascWeight"
              value="ascWeight"
              onChange={handleOrderByChange}
            />
            <label htmlFor="ascWeight">Ascendent</label>
          </div>
          <div className={s.descOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="filtersDogs"
              id="descWeight"
              value="descWeight"
              onChange={handleOrderByChange}
            />
            <label htmlFor="descWeight">Descendent</label>
          </div>
        </div>
      </div>
      <div className={s.filters}>
        <span>Filter dogs from</span>
        <div>
          <div className={s.apiOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="createDog"
              id="API"
              value="API"
              onChange={handleWhereFilterChange}
            />
            <label htmlFor="API">API</label>
          </div>
          <div className={s.dbOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="createDog"
              id="DB"
              value="DB"
              onChange={handleWhereFilterChange}
            />
            <label htmlFor="DB">DB</label>
          </div>
          <div className={s.allOption}>
            <input
              className={s.checkboxLabel}
              type="radio"
              name="createDog"
              id="all"
              value="All"
              onChange={handleWhereFilterChange}
            />
            <label htmlFor="all">All</label>
          </div>
        </div>
      </div>
    </div>
  );
}

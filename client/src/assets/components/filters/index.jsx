import { useEffect, useState } from "react";
import SelectTempField from "../customSelect";
import s from "./filters.module.css";

export default function Filters({ allDogs }) {
  const [selectedTemps, setSelectedTemps] = useState([]);

  const filterDogs = () => {
    const filterData = allDogs.filter((dog) => {
      return selectedTemps?.every((temp) => dog.Temperaments.includes(temp));
    });
    console.log(filterData);
  };

  const handleFilterChange = (event) => {
    const orderBy = event.target.value

    let filterData = [...allDogs]

    if (orderBy === "azOpt"){
      filterData.sort((a,b) => a.name.localeCompare(b.name))
    } else if (orderBy === "zaOpt"){
      filterData.sort((a,b) => b.name.localeCompare(a.name))
    } else if(orderBy === "ascWeight") {
      filterData.sort((a,b) => {
        const weightA = parseInt(a.weight.split(" - ")[0])
        const weightB = parseInt(b.weight.split(" - ")[0])
        return weightA - weightB
      })
    } else if(orderBy === "descWeight") {
      filterData.sort((a,b) => {
        const weightA = parseInt(a.weight.split(" - ")[0])
        const weightB = parseInt(b.weight.split(" - ")[0])
        return weightB - weightA
      })
    }

    console.log(filterData);
  };
  // useEffect(() => {
  //   console.log(selectedTemps);
  // }, [selectedTemps])

  return (
    <div className={s.filtersContainer}>
      <div className={s.filterTemps}>
        <SelectTempField
          label={"filter by temperaments: "}
          name={"temperaments"}
          handleSelect={filterDogs}
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
              onChange={handleFilterChange}
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
              onChange={handleFilterChange}
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
              onChange={handleFilterChange}
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
              onChange={handleFilterChange}
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
              onChange={handleFilterChange}
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
              onChange={handleFilterChange}
            />
            <label htmlFor="DB">DB</label>
          </div>
        </div>
      </div>
    </div>
  );
}

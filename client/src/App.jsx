import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandigPage from "./assets/views/landing";
import Navbar from "./assets/components/navbar";
import HomePage from "./assets/views/home";
import DetailPage from "./assets/views/detail";
import CreatePage from "./assets/views/create";
import FavoritesPage from "./assets/views/favorites";
import NotFoundPage from "./assets/views/404";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  clearInfo,
  getDogByName,
  getDogs,
} from "./assets/redux/actions/payloads";

function App() {
  //hooks
  //RouterDom
  const path = useLocation();
  //Redux
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs.filterDogs);


  useEffect(() => {
    dispatch(getDogs());
    console.log(allDogs);
  }, [dispatch]);

  //Filters
  const [search, setSearch] = useState("");
  const prevSearch = useRef(null);

  const handleChange = (event) => {
    const input = event.target.value;
    setSearch(input);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (search === prevSearch.current || search === "") return;
    prevSearch.current = search;
    dispatch(getDogByName(search));
  };

  const handleShowAll = (event) => {
    if (search === "" && !prevSearch.current) return;
    dispatch(getDogs());
    setSearch("");
    prevSearch.current = null
  };

  return (
    <>
      {path.pathname !== "/" && (
        <Navbar
          handleShowAll={handleShowAll}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
          search={search}
        />
      )}
      <Routes>
        <Route exact path="/" element={<LandigPage />} />
        <Route exact path="/home" element={<HomePage allDogs={allDogs} />} />
        <Route exact path="/detail/:id" element={<DetailPage />} />
        <Route exact path="/create" element={<CreatePage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

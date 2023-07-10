import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandigPage from "./assets/views/landing";
import Navbar from "./assets/components/navbar";
import HomePage from "./assets/views/home";
import DetailPage from "./assets/views/detail";
import CreatePage from "./assets/views/create";
import FavoritesPage from "./assets/views/favorites";
import NotFoundPage from "./assets/views/404";
import { useRef, useState, useEffect } from "react";
import { getDogByName, getDogs } from "./assets/redux/actions/payloads";
import { useDispatch } from "react-redux";
import OnlyDesktopPage from "./assets/views/onlyDesktop";

function App() {
  //RouterDom
  const path = useLocation();

  //Filters
  const dispatch = useDispatch();
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
    prevSearch.current = null;
  };

  //Check device
  const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      const maxWidth = 1150;
      const allowedDevice = window.innerWidth >= maxWidth;

      if (!allowedDevice && location.pathname !== "/error") {
        navigate("/error");
      } else if (allowedDevice && location.pathname === "/error") {
        navigate("/");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate, path.pathname]);

  return (
    <>
      {path.pathname !== "/" && path.pathname !== "/error" && (
        <Navbar
          handleShowAll={handleShowAll}
          handleChange={handleChange}
          handleSumbit={handleSumbit}
          search={search}
        />
      )}
      <Routes>
        <Route exact path="/" element={<LandigPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/detail/:id" element={<DetailPage />} />
        <Route exact path="/create" element={<CreatePage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route exact path="/error" element={<OnlyDesktopPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

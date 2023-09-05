import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandigPage from "./assets/views/landing";
import Navbar from "./assets/components/navbar";
import HomePage from "./assets/views/home";
import DetailPage from "./assets/views/detail";
import CreatePage from "./assets/views/create";
import FavoritesPage from "./assets/views/favorites";
import NotFoundPage from "./assets/views/404";
import { useState, useEffect } from "react";
import { getDogByName, getDogs } from "./assets/redux/actions/payloads";
import { useDispatch, useSelector } from "react-redux";
import OnlyDesktopPage from "./assets/views/onlyDesktop";
import SocialWebs from "./assets/components/socialWebs";

function App() {
  //RouterDom
  const path = useLocation();

  //Redux
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs.filterDogs);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    dispatch(getDogs(setIsLoading));
  }, []);

  const handleChange = (event) => {
    const input = event.target.value;
    dispatch(getDogByName(input))
    setSearch(input);
  };

  useEffect(() => {
    dispatch(getDogByName(search));
  },[search])


  const handleShowAll = (event) => {
    event.preventDefault()
    if (search === "" && !prevSearch.current) return;
    setSearch("");
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
          search={search}
        />
      )}
      <Routes>
        <Route exact path="/" element={<LandigPage />} />
        <Route exact path="/home" element={<HomePage allDogs={allDogs} isLoading={isLoading}/>} />
        <Route exact path="/detail/:id" element={<DetailPage />} />
        <Route exact path="/create" element={<CreatePage setIsLoading={setIsLoading}/>} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route exact path="/error" element={<OnlyDesktopPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <SocialWebs/>
    </>
  );
}

export default App;

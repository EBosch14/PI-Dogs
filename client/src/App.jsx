import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import LandigPage from "./assets/views/landing";
import Navbar from "./assets/components/navbar";
import HomePage from "./assets/views/home";
import DetailPage from "./assets/views/detail";
import CreatePage from "./assets/views/create";
import FavoritesPage from "./assets/views/favorites";
import NotFoundPage from "./assets/views/404";

function App() {
  const path = useLocation();

  return (
    <>
      {path.pathname !== "/" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<LandigPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/detail/:id" element={<DetailPage />} />
        <Route exact path="/create" element={<CreatePage />} />
        <Route exact path="/favorites" element={<FavoritesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

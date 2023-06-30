import { IconContext } from "react-icons";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandigPage from "./assets/views/landing";
import Navbar from "./assets/components/navbar";
import Home from "./assets/views/home";

function App() {
  const [login, setLogin] = useState(false);

  const validateLogin = () => {
    setLogin(true);
  };

  return (
    <BrowserRouter>
      <IconContext.Provider
        value={{ color: "#333333", style: { verticalAlign: "middle" } }}
      >
        {login && <Navbar />}
        <Routes>
          <Route
            exact
            path="/"
            element={<LandigPage validateLogin={validateLogin} />}
          />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </IconContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import { IconContext } from "react-icons";
import "./App.css";
import LandigPage from "./assets/views/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <IconContext.Provider
        value={{ color: "#333333", style: { verticalAlign: "middle" } }}
      >
        <Routes>
          <Route exact path="/" element={<LandigPage />} />
        </Routes>
      </IconContext.Provider>
    </BrowserRouter>
  );
}

export default App;

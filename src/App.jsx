import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import Intensity from "./pages/intensity/Intensity";
import Likelihood from "./pages/likelihood/Likelihood";
import City from "./pages/city/City";
import Country from "./pages/country/Country";
import Region from "./pages/region/Region";
import Relevance from "./pages/relevance/Relevance";
import Topics from "./pages/topics/Topics";
import Year from "./pages/year/Year";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intensity" element={<Intensity />} />
          <Route path="likelihood" element={<Likelihood />} />
          <Route path="city" element={<City />} />
          <Route path="country" element={<Country />} />
          <Route path="region" element={<Region />} />
          <Route path="relevance" element={<Relevance />} />
          <Route path="topics" element={<Topics />} />
          <Route path="year" element={<Year />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

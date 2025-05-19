import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'rc-slider/assets/index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./assets/pages/Layout"
import Home from "./assets/pages/Home"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import FilteredCat from "./assets/pages/FilteredCat"
import Details from "./assets/pages/Details";
import Search from "./assets/pages/Search";
import AdvancedResearch from "./assets/pages/AdvancedResearch";


export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/advanced-research" element={<AdvancedResearch />} />
            <Route path="/prods/cat/:cat" element={<FilteredCat />} />
            <Route path="/prods/:id" element={<Details />} />
            <Route path="/prods/search/:search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

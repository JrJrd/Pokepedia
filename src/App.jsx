import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"; 
import { PokemonList, HomePage, SinglePokmPage } from "./components/pages";

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul className="special-list">
          <li className="homeBtn">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="listBtn">
            <NavLink to="list">List</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<PokemonList />} />
        <Route path="list/:id" element={<SinglePokmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
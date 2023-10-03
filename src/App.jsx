import React from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom"; 
import { pokemList, HomePage, SinglePokmPage } from "./components/pages";
import PokemonList from "./components/pages/pokemList";

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="list">Full List</NavLink>
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
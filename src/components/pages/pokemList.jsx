import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PokemonList(props) {
  const [list, setList] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [weaknessesFilter, setWeaknessesFilter] = useState(""); 

  function getList() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data.pokemon);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getList();
  }, []);

  const isFiltered = typeFilter !== "" || weaknessesFilter !== "";

  return (
    <div className="filters">
     
      <label >
        Filter by Type:
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Grass">Grass</option>
          <option value="Fire">Fire</option>
          <option value="Poison">Poison</option>
          <option value="Flying">Flying</option>
          <option value="Water">Water</option>
          <option value="Bug">Bug</option>
          <option value="Electric">Electric</option>
          <option value="Ground">Ground</option>
          <option value="Fighting">Fighting</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Ice">Ice</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
         
        </select>
      </label>

      
      <label >
        Filter by Weaknesses:
        <select
          value={weaknessesFilter}
          onChange={(e) => setWeaknessesFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Water">Water</option>
          <option value="Electric">Electric</option>
          <option value="Poison">Poison</option>
          <option value="Flying">Flying</option>
          <option value="Ground">Ground</option>
          <option value="Fighting">Fighting</option>
          <option value="Psychic">Psychic</option>
          <option value="Rock">Rock</option>
          <option value="Ice">Ice</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
          
        </select>
      </label>

      <ul>
        {list
          .filter((pokemon) => {
            // Check if the Pokemon matches the selected type and weaknesses filters
            const typeMatches =
              typeFilter === "" || pokemon.type.includes(typeFilter);
            const weaknessesMatch =
              weaknessesFilter === "" ||
              pokemon.weaknesses.includes(weaknessesFilter);

            // Return true only if both filters match or no filters are applied
            return typeMatches && weaknessesMatch;
          })
          .map((pokemon) => (
            <li key={pokemon.id}>
              <Link to={`/list/${pokemon.id}`}>{pokemon.name}
              <div>
                <img src={pokemon.img} alt={`${pokemon.name} Image`} />
              </div>
              </Link>

            </li>
          ))}
      </ul>
    </div>
  );
}

export default PokemonList;

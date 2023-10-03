import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function PokemonList(props) {
  const [list, setList] = useState([]);

  function getList() {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); 
       
        setList(data.pokemon);
        console.log("Updated list:", list); 
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getList();
  }, []);

  console.log("Rendered list:", list);

  return (
    <div>

    
    <ul>
      {list.map((pokemon) => (
        <li key={pokemon.id}>
       <Link to={`/list/${pokemon.id}`}>{pokemon.name}</Link>


        </li>
        ))}
    </ul>
        </div>
  );
}

export default PokemonList;

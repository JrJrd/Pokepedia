import React, { useState } from "react";

function HomePage(props) {
  const [searchText, setSearchText] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleSearch = () => {
    const apiUrl = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Find the pokemon with the matching name
        const matchingPokemon = data.pokemon.find(
          (pokemon) =>
            pokemon.name.toLowerCase() === searchText.toLowerCase()
        );

        // Set the found pokemon data in the state
        setPokemonData(matchingPokemon);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setPokemonData(null);
      });
  };

  return (
    <div>
      <h1>Pokémon Search</h1>
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.img} alt={`${pokemonData.name} Poster`} />
          <p>Type: {pokemonData.type.join(", ")}</p>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      ) : (
        searchText && <p>No Pokémon found with the name: {searchText}</p>
      )}
    </div>
  );
}

export default HomePage;

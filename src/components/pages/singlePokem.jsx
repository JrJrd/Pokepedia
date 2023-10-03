import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePokmPage(props) {
  const [item, setItem] = useState({});
  const { id } = useParams();

  function getList() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const pokemon = data.pokemon.find(
          (pokemon) => pokemon.id.toString() === id
        );
        if (pokemon) {
          setItem(pokemon);
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getList();
  }, [id]);

  return (
    <div>
      <div>
        <img src={item.img} alt={`${item.num} Poster`} />
      </div>
      <div>
        <h1>{item.name}</h1>
        <p>Type: {item.type.join(", ")}</p>
        <p>Height: {item.height}</p>
        <p>Weight: {item.weight}</p>
        <p>Candy: {item.candy}</p>
        <p>Candy Count: {item.candy_count}</p>
        <p>Egg: {item.egg}</p>
        <p>Spawn Chance: {item.spawn_chance}</p>
        <p>Average Spawns: {item.avg_spawns}</p>
        <p>Spawn Time: {item.spawn_time}</p>
        <p>Weaknesses: {item.weaknesses.join(", ")}</p>
      </div>
    </div>
  );
}

export default SinglePokmPage;

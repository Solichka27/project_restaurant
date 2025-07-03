import { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./PokemonList.module.css";


const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=27');
        setPokemons(res.data.results);
        setLoading(false);
      } catch (err) {
        setError('Failed to load Pokemon');
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1 className={style.title}>List of Pokémon</h1>

      <div className={style.mainContent}>

        {pokemons.map((pokemon, index) => {
          const pokemonId = index + 1;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

          return (
            <div
              key={pokemon.name}
              className={style.blockPokemon}
            >
              <img src={imageUrl} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default PokemonList;

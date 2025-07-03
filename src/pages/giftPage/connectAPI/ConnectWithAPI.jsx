import { useEffect, useState } from 'react';
import axios from 'axios';
import style from "./ConnectWithAPI.module.css"

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=27');
        setPokemons(res.data.results);
        setLoading(false);
      } catch (err) {
        console.error('Помилка при завантаженні покемонів', err);
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  if (loading) return <p>Завантаження...</p>;

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

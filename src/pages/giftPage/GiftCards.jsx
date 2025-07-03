import style from './GiftCards.module.css';
import PokemonList from './pokemonList/PokemonList';


const GiftCards = () => {
    return (
        <div className={style.mainContainer}>
            <PokemonList />
        </div>
    )
}

export default GiftCards;
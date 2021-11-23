import './App.scss';
import useSound from 'use-sound';
import PokemonBall from './imgs/pokemonBall.png';

function CatchingSystem (props) {
    const {catchPokemon} = props;





    return (
        <section>
            { catchPokemon? 
            <img className="pokemonBall catchingAct" src={PokemonBall} alt="A Pokémon ball" />
            : null}   
        </section>
    )
}

export default CatchingSystem;
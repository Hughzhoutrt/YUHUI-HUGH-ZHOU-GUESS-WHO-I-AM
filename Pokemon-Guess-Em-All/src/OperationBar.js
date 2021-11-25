import './App.scss';
import useSound from 'use-sound';
import { useState } from 'react';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';
import CatchingSystem from './CatchingSystem';
import TossSound from './audios/tossBall.mp3';

function OperationBar (props) {
    const {pokedexShow, setPokedexShow, setPokemonAppear, setOperationBarShow, setHeaderDisplay, setStopMusicDisplay, setStopBattleMusicDisplay, catchPokemon, setCatchPokemon, userPokemonNumber, pokemonListShow, setPokemonListShow} = props;

    const [alreadyCatched, setAlreadyCatched] = useState(false);

    const resetTheWholeInterface = () => {
        setPokemonAppear(false);
        setOperationBarShow(false);
        setPokedexShow(false);
        setHeaderDisplay(true);
        setStopMusicDisplay(true);
        setStopBattleMusicDisplay(true);
        setCatchPokemon(false);
        setPokemonListShow(false);
        setAlreadyCatched(false);
    }

    const OpenningPokedexInterface = () => {
        setPokedexShow(!pokedexShow);
    }

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);
    const [playTossSound] = useSound(TossSound);

    const CatchingPokemon = () => {
        if (userPokemonNumber >= 6) {
            alert(`You already have 6 Pokémons and cannot catch a new one!`);
        } else {
        setCatchPokemon(true);
        }
    }

    const OpenPokemonList = () => {
        setPokemonListShow(!pokemonListShow);
    }

    const AlreadyCatchedIt = () => {
        setAlreadyCatched(true);
    }

    return (
        <>
            <section className="operatingBar pokemonStyleBorder">
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); OpenningPokedexInterface();}}>Pokédex</button>
                <button onMouseEnter={playHoverSound} onClick={()=>{CatchingPokemon(); playTossSound(); AlreadyCatchedIt();}} disabled={alreadyCatched? true : false}>Catch</button>
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); OpenPokemonList();}}>Pokémon</button>
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); resetTheWholeInterface();}}>Run</button>
            </section>

            <CatchingSystem catchPokemon={catchPokemon}
            userPokemonNumber={userPokemonNumber}/>
        </>
    )
}

export default OperationBar;
import './App.scss';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';
import CatchingSystem from './CatchingSystem';

function OperationBar (props) {
    const {pokedexShow, setPokedexShow, setPokemonAppear, setOperationBarShow, setHeaderDisplay, setStopMusicDisplay, setStopBattleMusicDisplay, catchPokemon, setCatchPokemon, userPokemonNumber, pokemonListShow, setPokemonListShow} = props;

    const resetTheWholeInterface = () => {
        setPokemonAppear(false);
        setOperationBarShow(false);
        setPokedexShow(false);
        setHeaderDisplay(true);
        setStopMusicDisplay(true);
        setStopBattleMusicDisplay(true);
        setCatchPokemon(false);
        setPokemonListShow(false);
    }

    const OpenningPokedexInterface = () => {
        setPokedexShow(!pokedexShow);
    }

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);

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

    return (
        <>
            <section className="operatingBar pokemonStyleBorder">
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); OpenningPokedexInterface();}}>Pokédex</button>
                <button onMouseEnter={playHoverSound} onClick={CatchingPokemon}>Catch</button>
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); OpenPokemonList();}}>Pokémon</button>
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); resetTheWholeInterface();}}>Run</button>
            </section>

            <CatchingSystem catchPokemon={catchPokemon}
            userPokemonNumber={userPokemonNumber}/>
        </>
    )
}

export default OperationBar;
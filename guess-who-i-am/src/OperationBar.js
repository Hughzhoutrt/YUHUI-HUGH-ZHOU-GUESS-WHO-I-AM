import './App.scss';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';
import CatchingSystem from './CatchingSystem';

function OperationBar (props) {
    const {pokedexShow, setPokedexShow, pokemonAppear, setPokemonAppear, operationBarShow, setOperationBarShow, setHeaderDisplay, setStopMusicDisplay, setStopBattleMusicDisplay, catchPokemon, setCatchPokemon} = props;

    const resetTheWholeInterface = () => {
        setPokemonAppear(false);
        setOperationBarShow(false);
        setPokedexShow(false);
        setHeaderDisplay(true);
        setStopMusicDisplay(true);
        setStopBattleMusicDisplay(true);
        setCatchPokemon(false);
    }

    const OpenningPokedexInterface = () => {
        setPokedexShow(!pokedexShow);
    }

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);

    const CatchingPokemon = () => {
        setCatchPokemon(true);
    }

    return (
        <>
            <section className="operatingBar pokemonStyleBorder">
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); OpenningPokedexInterface();}}>Pokédex</button>
                <button onMouseEnter={playHoverSound} onClick={CatchingPokemon}>Catch</button>
                <button onMouseEnter={playHoverSound}>Pokémon</button>
                <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); resetTheWholeInterface();}}>Run</button>
            </section>

            <CatchingSystem catchPokemon={catchPokemon} setCatchPokemon={setCatchPokemon}/>
        </>
    )
}

export default OperationBar;
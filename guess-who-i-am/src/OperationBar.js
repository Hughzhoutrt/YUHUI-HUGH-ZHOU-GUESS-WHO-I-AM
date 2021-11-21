import './App.scss';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';

function OperationBar (props) {
    const {pokedexShow, setPokedexShow, pokemonAppear, setPokemonAppear, operationBarShow, setOperationBarShow, setHeaderDisplay, setStopMusicDisplay} = props;

    const resetTheWholeInterface = () => {
        setPokemonAppear(false);
        setOperationBarShow(false);
        setPokedexShow(false);
        setHeaderDisplay(true);
        setStopMusicDisplay(true);
    }

    const OpenningPokedexInterface = () => {
        setPokedexShow(!pokedexShow);
    }

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);

    return (
        <div className="operatingBar pokemonStyleBorder">
             <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); OpenningPokedexInterface();}}>Pokédex</button>
             <button onMouseEnter={playHoverSound} >Catch</button>
             <button onMouseEnter={playHoverSound}>Pokémon</button>
             <button onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); resetTheWholeInterface();}}>Run</button>
        </div>
    )
}

export default OperationBar;
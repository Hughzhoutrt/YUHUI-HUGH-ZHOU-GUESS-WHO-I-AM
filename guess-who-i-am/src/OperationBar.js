import './App.scss';

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

    return (
        <div className="operatingBar pokemonStyleBorder">
             <button onClick={OpenningPokedexInterface}>Pokédex</button>
             <button>Catch</button>
             <button>Pokémon</button>
             <button onClick={resetTheWholeInterface}>Run</button>
        </div>
    )
}

export default OperationBar;
import './App.scss';

function OperationBar (props) {
    const {pokedexShow, setPokedexShow, pokemonAppear, setPokemonAppear, operationBarShow, setOperationBarShow, setHeaderDisplay} = props;

    const resetTheWholeInterface = () => {
        setPokemonAppear(false);
        setOperationBarShow(false);
        setPokedexShow(false);
        setHeaderDisplay(true);
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
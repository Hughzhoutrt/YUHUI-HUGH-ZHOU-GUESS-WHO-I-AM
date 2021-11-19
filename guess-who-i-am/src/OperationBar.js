import './App.scss';

function OperationBar (props) {
    const {pokedexShow, setPokedexShow, pokemonAppear, setPokemonAppear, operationBarShow, setOperationBarShow} = props;

    const resetTheWholeInterface = () => {
        setPokemonAppear(false);
        setOperationBarShow(false);
        setPokedexShow(false);
    }

    const OpenningPokedexInterface = () => {
        setPokedexShow(!pokedexShow);
    }

    return (
        <div>
             <button onClick={OpenningPokedexInterface}>Pokédex</button>
             <button>Catch</button>
             <button>Pokémon</button>
             <button onClick={resetTheWholeInterface}>Run</button>
        </div>
    )
}

export default OperationBar;
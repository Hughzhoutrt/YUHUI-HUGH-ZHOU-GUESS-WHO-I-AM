import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnswerTheName from './AnswerTheName';

function GetPokemonData(props) {
    const { operationBarShow, setOperationBarShow, setPokemonName, setPokemonImg } = props;
    const [randomPokemon, setRandomPokemon] = useState(''); // Get a Pokemon based on the randomNumber
    const [randomPokemonName, setRandomPokemonName] = useState('');
    const [randonPokemonAlt, setRandomPokemonAlt] = useState('');
    const [pokemonFog, setPokemonFog] = useState(false);
    const [pokemonPlay, setPokemonPlay] = useState(false);

    useEffect(() => {
        const pokemonTotalNumber = 898; //Pokemon total amount
        const randomPokemonId = parseInt(Math.random() * (pokemonTotalNumber + 1));
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

        axios({
            url: pokemonUrl,
            method: 'GET',
            responseType: 'json'
        })
            .then(response => {
                console.log(response.data);
                setRandomPokemon(response.data.sprites.front_default);
                setRandomPokemonName(response.data.name);
                setRandomPokemonAlt(`The picture of ${response.data.name}`)
                setPokemonName(response.data.name);
                setPokemonImg(response.data.sprites.front_default);
            })
    }, [])

    useEffect(() => {

    })

    const reAnimation = () =>{
        setPokemonFog(!pokemonFog);
        setPokemonPlay(!pokemonPlay);
    }

    return (
        <>
            <div onClick={reAnimation} className="wildPokemonImgContainer">
                <img className={pokemonFog ? "showPokemon wildPokemonImg" 
                                :pokemonPlay ? "playPokemon wildPokemonImg"
                                : "hidePokemon wildPokemonImg"} src={randomPokemon} alt={randonPokemonAlt}></img>
            </div>
            <AnswerTheName correctName={randomPokemonName}
                pokemonFog={pokemonFog}
                setPokemonFog={setPokemonFog}
                operationBarShow={operationBarShow}
                setOperationBarShow={setOperationBarShow}/>
        </>
    )
}

export default GetPokemonData;
import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnswerTheName from './AnswerTheName';

function GetPokemonData () {
   
    const [randomPokemon, setRandomPokemon] = useState(''); // Get a Pokemon based on the randomNumber
    const [randomPokemonName, setRandomPokemonName] = useState('');
    const [randonPokemonAlt, setRandomPokemonAlt] = useState ('');
    const [pokemonFog, setPokemonFog] = useState(false);

    useEffect (() => {
        const pokemonTotalNumber = 898; //Pokemon total amount
        const randomPokemonId = parseInt(Math.random() * (pokemonTotalNumber + 1));
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

        axios({
            url: pokemonUrl,
            method: 'GET',
            responseType: 'json'
          })
          .then(response => {
            setRandomPokemon(response.data.sprites.front_default);
            setRandomPokemonName(response.data.name);
            setRandomPokemonAlt(`The picture of ${response.data.name}`)
          })
    }, [])

    // const userInputTextSubumitted = (boolean) =>{
    //     setPokemonFog(boolean);
    // }

    

    return (
        <div>
            <img className= {pokemonFog ? "showPokemon wildPokemonImg" : "hidePokemon wildPokemonImg" } src={randomPokemon} alt={randonPokemonAlt}></img>

            <AnswerTheName correctName={randomPokemonName} pokemonFog={pokemonFog} setPokemonFog = {setPokemonFog} />


        </div>
    )
}

export default GetPokemonData;
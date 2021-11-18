import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function GetPokemonData () {
   
    const [randomPokemon, setRandomPokemon] = useState(''); // Get a Pokemon based on the randomNumber
    const [randomPokemonName, setRandomPokemonName] = useState('');

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
              console.log(response.data);
            setRandomPokemon(response.data.sprites.front_default);
            setRandomPokemonName(`The picture of ${response.data.name}`)
          })
    }, [])


    return (
        <div>
            <img className="wildPokemonImg" src={randomPokemon} alt={randomPokemonName}></img>
        </div>
    )

    

}

export default GetPokemonData;
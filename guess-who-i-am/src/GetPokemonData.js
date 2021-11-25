import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AnswerTheName from './AnswerTheName';
import useSound from 'use-sound';
import HoverPokemonSound from './audios/hoverPokemonSound.mp3';
import ClickPokemonSound from './audios/clickPokemonSound.mp3';
import PokemonList from './PokemonList';

function GetPokemonData(props) {
    const { operationBarShow, setOperationBarShow, pokemonName, setPokemonName, pokemonImg, setPokemonImg, catchPokemon, userName, userPokemonNumber, setUserPokemonNumber, pokemonListShow} = props;
    const [randomPokemon, setRandomPokemon] = useState(''); // Get a Pokemon based on the randomNumber
    const [randomPokemonName, setRandomPokemonName] = useState('');
    const [randonPokemonAlt, setRandomPokemonAlt] = useState('');
    const [pokemonFog, setPokemonFog] = useState(false);
    const [pokemonPlay, setPokemonPlay] = useState(0);

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
                setRandomPokemon(response.data.sprites.front_default);
                setRandomPokemonName(response.data.name);
                setRandomPokemonAlt(`The picture of ${response.data.name}`)
                setPokemonName(response.data.name);
                setPokemonImg(response.data.sprites.front_default);
            })
    },[setPokemonImg, setPokemonName])

    const reAnimation = () =>{
        setPokemonFog(!pokemonFog);
        setPokemonPlay(pokemonPlay + 1);

        if (pokemonPlay === 10) {
            setPokemonPlay(2);
        }
    }

    const [playHoverPokemonSound] = useSound(HoverPokemonSound);
    const [playClickPokemonSound] = useSound(ClickPokemonSound);

    return (
        <>
            <section onMouseEnter={playHoverPokemonSound} onClick={()=> {playClickPokemonSound();reAnimation();}} className="wildPokemonImgContainer">
                <img className={catchPokemon ? "catchPokemon wildPokemonImg"
                                :pokemonFog ? "showPokemon wildPokemonImg" 
                                :pokemonPlay > 1 ? "playPokemon wildPokemonImg"
                               
                                : "hidePokemon wildPokemonImg"} src={randomPokemon} alt={randonPokemonAlt}></img>
            </section>

            <AnswerTheName correctName={randomPokemonName}
                pokemonFog={pokemonFog}
                setPokemonFog={setPokemonFog}
                operationBarShow={operationBarShow}
                setOperationBarShow={setOperationBarShow}/>

            <PokemonList catchPokemon={catchPokemon}
            pokemonName={pokemonName}
            pokemonImg={pokemonImg}
            userName={userName}
            userPokemonNumber={userPokemonNumber}
            setUserPokemonNumber={setUserPokemonNumber}
            pokemonListShow={pokemonListShow}/>
        </>
    )
}

export default GetPokemonData;
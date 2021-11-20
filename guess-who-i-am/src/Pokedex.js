import { useEffect, useState } from 'react';
import axios from 'axios';
import pokemonBall from './imgs/pokemonBall.png'
import pokedexImg from './imgs/pokedex.png'

function Pokedex(props) {
    const { pokemonName, pokemonImg, pokedexShow, pokemonAppear } = props;
    const [pokemonText, setPokemonText] = useState('');
    const [pokemonGenera, setPokemonGenera] = useState('');
    const [pokemonHabitat, setPokemonHabitat] = useState('');

    useEffect(() => {
        console.log(pokemonName);
        const specificPokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
        axios({
            url: specificPokemonUrl,
            method: 'GET',
            responseType: 'json'
        })
            .then(response => {
                if (pokemonAppear) {
                    console.log(response.data.genera);

                    const findingEnglishVersion = texts => {
                        return texts.language.name === "en";
                    }

                    setPokemonGenera(response.data.genera.find(findingEnglishVersion).genus);
                    (response.data.habitat === null) ? (setPokemonHabitat('unknown')) : (setPokemonHabitat(response.data.habitat.name));
                    setPokemonText(response.data.flavor_text_entries.find(findingEnglishVersion).flavor_text);

                }

            })
    }, [pokemonName])

    const pokemonNameInPokedex = pokemonName.slice(0, 1).toUpperCase() + pokemonName.slice(1)

    return (
        <>
            {pokedexShow && pokemonAppear ?
                <div className="pokedexContainer pokemonStyleBorder">
                    <div className="pokedexSubContainer">
                        <img className="pokedexDecoration" src={pokedexImg} aria-hidden="true" />   
                        <img className="pokemonBallDecoration pokemonBallDecoration1" src={pokemonBall} aria-hidden="true" />
                        <img className="pokemonBallDecoration pokemonBallDecoration2" src={pokemonBall} aria-hidden="true" />
                        <img className="pokemonBallDecoration pokemonBallDecoration3" src={pokemonBall} aria-hidden="true" />
                        <img className="pokemonBallDecoration pokemonBallDecoration4" src={pokemonBall} aria-hidden="true" />
                        <div className="podexTittle">
                            <img src={pokemonImg} />
                            <h2>{pokemonNameInPokedex}</h2>
                        </div>
                        <div className="podexText">
                            <p>Genus: {pokemonGenera}</p>
                            <p>Habitat: {pokemonHabitat}</p>
                            <p>{pokemonText}</p>
                        </div>
                    </div>
                </div>
            : null}
        </>
    )
}

export default Pokedex;
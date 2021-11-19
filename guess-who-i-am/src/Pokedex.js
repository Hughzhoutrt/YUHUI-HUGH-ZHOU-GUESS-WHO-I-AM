import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            {pokedexShow && pokemonAppear ?
                <>
                    <h2>{pokemonNameInPokedex}</h2>
                    <img src={pokemonImg} />
                    <div>
                        <p>Genus: {pokemonGenera}</p>
                        <p>Habitat: {pokemonHabitat}</p>
                    </div>
                    <div>
                        <p>{pokemonText}</p>
                    </div>
                </>
                : null}
        </div>
    )
}

export default Pokedex;
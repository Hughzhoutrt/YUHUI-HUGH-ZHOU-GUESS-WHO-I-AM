import './App.scss';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';


function PokemonList(props) {
    const { catchPokemon, pokemonName, pokemonImg, userName, setUserPokemonNumber, pokemonListShow } = props;

    const [playHoverSound] = useSound(HoverSound);

    const [removePokemonFromList, setRemovePokemonFromList] = useState(false);
    const [userPokemonTeam, setUserPokemonTeam] =useState([]);
    

    const updatingCatchedPokemon = (userName, pokemonName, pokemonUrl) => {
        const dbRef = firebase.database().ref(userName + '/' + pokemonName);
        dbRef.set({
                name:pokemonName,
                img:pokemonUrl
        });
    }

    const removeCatchedPokemon = (userName, pokemonName) => {
        const dbRefrv = firebase.database().ref(userName + '/' + pokemonName);
        dbRefrv.remove();
        setRemovePokemonFromList(!removePokemonFromList);
    }

    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const data = response.val();
            const dataConvertToArray = Object.keys(data);
            if (String(dataConvertToArray).indexOf(userName) !== -1) {
                setUserPokemonNumber(Object.keys(data[userName]).length);
                const userPokemons = Object.values(data[userName]);
                setUserPokemonTeam(userPokemons);
            } else {
                firebase.database().ref(userName).set('');
            }
        })
    },[userName, removePokemonFromList,setUserPokemonNumber])


    useEffect(() => {
        if(catchPokemon) {
        updatingCatchedPokemon(userName,pokemonName, pokemonImg);
        }
    }, [catchPokemon, pokemonImg, pokemonName, userName])

    return (
        <>
            {pokemonListShow ? <section className="pokemonPackage pokemonStyleBorder">
                {userPokemonTeam.map((pokemon)=>{
                    return (
                        <div key={pokemon.name} onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, pokemon.name);e.stopPropagation()}}>
                            <p>{pokemon.name}</p>
                            <img src={pokemon.img} alt={pokemon.name + ` in the Pokédex`}/>
                        </div>
                    )
                })}
            </section>
            :null}
        </>
    )
}

export default PokemonList;
import './App.scss';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';


function PokemonList(props) {
    const { catchPokemon, pokemonName, pokemonImg, userName, setUserPokemonNumber, pokemonListShow } = props;

    const [playHoverSound] = useSound(HoverSound);

    const [firstUserPokemon, setFirstUserPokemon] =useState({});
    const [secondUserPokemon, setSecondUserPokemon] =useState({});
    const [thirdUserPokemon, setThirdUserPokemon] =useState({});
    const [fourthUserPokemon, setFourthUserPokemon] =useState({});
    const [fifthtUserPokemon, setFifthUserPokemon] =useState({});
    const [sixthtUserPokemon, setSixthUserPokemon] =useState({});
    const [removePokemonFromList, setRemovePokemonFromList] = useState(false);

    

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
                if (userPokemons[0] !== undefined) {
                    setFirstUserPokemon(userPokemons[0]);}
                if (userPokemons[1] !== undefined) {
                    setSecondUserPokemon(userPokemons[1]);}
                if (userPokemons[2] !== undefined) {
                    setThirdUserPokemon(userPokemons[2]);}
                if (userPokemons[3] !== undefined) {
                    setFourthUserPokemon(userPokemons[3]);}
                if (userPokemons[4] !== undefined) {
                    setFifthUserPokemon(userPokemons[4]);}
                if (userPokemons[5] !== undefined) {
                    setSixthUserPokemon(userPokemons[5]);}
            } else {
                firebase.database().ref(userName).set('');
            }
        })
    },[userName, removePokemonFromList])


    useEffect(() => {
        if(catchPokemon) {
        updatingCatchedPokemon(userName,pokemonName, pokemonImg);
        }
    }, [catchPokemon])

    return (
        <>
            {pokemonListShow ? <section className="pokemonPackage pokemonStyleBorder">
                {firstUserPokemon !== undefined ?
                    <div onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, firstUserPokemon.name);e.stopPropagation()}}>
                        <p>{firstUserPokemon.name}</p>
                        <img src={firstUserPokemon.img} alt={firstUserPokemon.name + ` in your Pokémon package.`}/>
                    </div>
                :  <div></div>}
                 {secondUserPokemon !== undefined ?
                    <div onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, secondUserPokemon.name);e.stopPropagation()}}>
                        <p>{secondUserPokemon.name}</p>
                        <img src={secondUserPokemon.img}  alt={secondUserPokemon.name + ` in your Pokémon package.`}/>
                    </div>
                    : <div></div>}
                {thirdUserPokemon !== undefined ?
                    <div onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, thirdUserPokemon.name);e.stopPropagation()}}>
                        <p>{thirdUserPokemon.name}</p>
                        <img src={thirdUserPokemon.img}  alt={thirdUserPokemon.name + ` in your Pokémon package.`}/>
                    </div>
                : <div></div>}
                {fourthUserPokemon !== undefined ?
                    <div onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, fourthUserPokemon.name);e.stopPropagation()}}>
                        <p>{fourthUserPokemon.name}</p>
                        <img src={fourthUserPokemon.img} alt={fourthUserPokemon.name + ` in your Pokémon package.`}/>
                    </div>
                : <div></div>}
                {fifthtUserPokemon !== undefined ?
                    <div onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, fifthtUserPokemon.name);e.stopPropagation()}}>
                        <p>{fifthtUserPokemon.name}</p>
                        <img src={fifthtUserPokemon.img}  alt={fifthtUserPokemon.name + ` in your Pokémon package.`}/>
                    </div>
                : <div></div>}
                {sixthtUserPokemon !== undefined ?
                    <div onMouseEnter={playHoverSound} onClickCapture={(e)=>{removeCatchedPokemon(userName, sixthtUserPokemon.name);e.stopPropagation()}}>
                        <p>{sixthtUserPokemon.name}</p>
                        <img src={sixthtUserPokemon.img} alt={sixthtUserPokemon.name + ` in your Pokémon package.`}/>
                    </div>
                : <div></div>}
            </section>
            :null}
        </>
    )
}

export default PokemonList;
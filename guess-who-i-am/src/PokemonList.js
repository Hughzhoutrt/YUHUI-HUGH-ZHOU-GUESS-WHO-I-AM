import './App.scss';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';


function PokemonList(props) {
    const { catchPokemon, pokemonName, pokemonImg, userName } = props;

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);

    const [userPokemonNumber, setUserPokemonNumber] = useState(0)
    const [firstUserPokemon, setFirstUserPokemon] =useState({});
    const [secondUserPokemon, setSecondUserPokemon] =useState({});
    const [thirdUserPokemon, setThirdUserPokemon] =useState({});
    const [fourthUserPokemon, setFourthUserPokemon] =useState({});
    const [fifthtUserPokemon, setFifthUserPokemon] =useState({});
    const [sixthtUserPokemon, setSixthUserPokemon] =useState({});

    

    const updatingCatchedPokemon = (userName, pokemonSerialNumber,pokemonName, pokemonUrl) => {
        const dbRef = firebase.database().ref(userName + '/' + pokemonSerialNumber);
        dbRef.set({
                name:pokemonName,
                img:pokemonUrl
        });
    }

    useEffect(() => {
            const dbRef = firebase.database().ref();
            dbRef.on('value', (response) => {
                const data = response.val();
                console.log(userName);
                console.log(data);
                const dataConvertToArray = Object.keys(data);
                console.log(dataConvertToArray);
                console.log(String(dataConvertToArray).indexOf(userName));
                if (String(dataConvertToArray).indexOf(userName) !== -1) {
                    setUserPokemonNumber(Object.keys(data[userName]).length);
                    console.log(userPokemonNumber);
                    console.log(data[userName]);
                    const userPokemons = Object.values(data[userName]);
                    console.log(userPokemons);
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
        
    },[userName])


    useEffect(() => {
        if(catchPokemon) {
            console.log(userName);
            const serialNumber = 'third';
        updatingCatchedPokemon(userName,serialNumber,pokemonName, pokemonImg);
        }

        //  const dbRef = firebase.database().ref();
        //  dbRef.on('value', (response) => {

        //      const data = response.val();
        //     console.log(data);
        //  })

    }, [catchPokemon])

    return (
        <>
            <section>
                {firstUserPokemon !== undefined ?
                    <div>
                        <h2>{firstUserPokemon.name}</h2>
                        <img src={firstUserPokemon.img} />
                    </div>
                    : null}
                 {secondUserPokemon !== undefined ?
                    <div>
                        <h2>{secondUserPokemon.name}</h2>
                        <img src={secondUserPokemon.img} />
                    </div>
                    : null}
                {thirdUserPokemon !== undefined ?
                    <div>
                        <h2>{thirdUserPokemon.name}</h2>
                        <img src={thirdUserPokemon.img} />
                    </div>
                : null}
                {fourthUserPokemon !== undefined ?
                    <div>
                        <h2>{fourthUserPokemon.name}</h2>
                        <img src={fourthUserPokemon.img} />
                    </div>
                : null}
                {fifthtUserPokemon !== undefined ?
                    <div>
                        <h2>{fifthtUserPokemon.name}</h2>
                        <img src={fifthtUserPokemon.img} />
                    </div>
                : null}
                {sixthtUserPokemon !== undefined ?
                    <div>
                        <h2>{sixthtUserPokemon.name}</h2>
                        <img src={sixthtUserPokemon.img} />
                    </div>
                : null}
            </section>
        </>
    )
}

export default PokemonList;
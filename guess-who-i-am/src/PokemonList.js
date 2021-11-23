import './App.scss';
import firebase from './firebase';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';


function PokemonList(props) {
    const { catchPokemon, pokemonName, pokemonImg, userSignIn, setUserSignIn } = props;

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);

    const [userName, setUserName] = useState('');

    const [catchedPokemonNumber, setCatchedPokemonNumber] = useState(0);

    const UserNameInput = (event) => {
        setUserName(event.target.value);

    }

    const UserNameSubmit = (event) => {
        event.preventDefault();
    }

    const UserNameSubmitButton = () => {
        setUserSignIn(true);
    }



    const updatingCatchedPokemon = (userName, pokemonName, pokemonUrl) => {
        const dbRef = firebase.database().ref(userName);
        dbRef.set({
            name:pokemonName,
            img:pokemonUrl
        });
    }

    useEffect(() => {
        if(catchPokemon) {
        updatingCatchedPokemon("hugh", pokemonName, pokemonImg);
        }

        //  const dbRef = firebase.database().ref();
        //  dbRef.on('value', (response) => {

        //      const data = response.val();
        //     console.log(data);
        //  })

        console.log("work!")

    }, [catchPokemon])

    // useEffect(() => {
    //     if (userSignIn != '') {
    //         const dbRef = firebase.database().ref();
    //         dbRef.on('value', (response) => {

    //             const data = response.val();
               
    //             console.log(data);
    //         })
    //     }
    // }, [userSignIn])




    return (
        <>
            {userSignIn === false && catchPokemon ?
                <section className="userNameInputForm">
                    <form onSubmit={UserNameSubmit}>
                        <label htmlFor="userNameInputTextArea">Please enter your username:</label>
                        <div>
                            <input onClick={playHoverSound} type="text" id="userNameInputTextArea" onChange={UserNameInput} />
                            <button onMouseEnter={playHoverSound} onClick={() => { playClickSound(); UserNameSubmitButton(); }}>Submit!</button>
                        </div>
                    </form>
                </section>
                : null}
            <section>
                {catchPokemon ?
                    <div id={'pokemonList' + catchedPokemonNumber}>
                        <h2>{pokemonName}</h2>
                        <img src={pokemonImg} />
                    </div>
                    : null}
            </section>
        </>
    )
}

export default PokemonList;
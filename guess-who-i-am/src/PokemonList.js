import './App.scss';
import firebase from './firebase';
import { useState, useEffect } from 'react';


function PokemonList(props) {
    const {catchPokemon} = props;
    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {

            const data = response.val();
            console.log(data.userList);
        })

    }, [catchPokemon])


    return (
        <>
        </>
    )
}

export default PokemonList;
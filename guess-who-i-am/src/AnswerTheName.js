import './App.scss';
import { useEffect, useState } from 'react';

function AnswerTheName (props) {
    console.log(props.correctName);
    const {correctName, pokemonFog, setPokemonFog} = props;
    const [userInputText, setUserInputText] = useState('');
    const [submittedAlready, setSubmittedAlready] = useState(false);
    
    const GetUserInputText = (event) => {
        setUserInputText(event.target.value);
    }

    const SubmitUserInputText = (event) => {
        event.preventDefault();
        userInputText.toLowerCase() === props.correctName ? console.log('yes') : console.log('no')
    }

    const userInputSubmitting = () => {
        // setSubmittedAlready(!submittedAlready);
        setPokemonFog(!pokemonFog);
    }
    // props.userInputTextSubumitted(submittedAlready);


    return (
        <form onSubmit = {SubmitUserInputText}>
            <label htmlFor="pokemonInputTextArea">Guess who I am?</label>
            <input type="text" id = "pokemonInputTextArea"  onChange={GetUserInputText}/>
            <button onClick={userInputSubmitting}>Submit!</button>
        </form>
    )
}

export default AnswerTheName;
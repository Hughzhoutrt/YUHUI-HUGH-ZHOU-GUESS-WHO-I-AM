import './App.scss';
import { useState } from 'react';

function AnswerTheName (props) {
    console.log(props.correctName);
    const {correctName, pokemonFog, setPokemonFog, poperationBarShow, setOperationBarShow} = props;
    const [userInputText, setUserInputText] = useState('');
    const [submittedAlready, setSubmittedAlready] = useState(false);
    
    const GetUserInputText = (event) => {
        setUserInputText(event.target.value);
    }

    const SubmitUserInputText = (event) => {
        event.preventDefault();
        setSubmittedAlready(!submittedAlready);
    }

    const userInputSubmitting = () => {
        setPokemonFog(!pokemonFog);
        setOperationBarShow(!poperationBarShow);
    }

    const upperCasePokemonName = correctName.slice(0,1).toUpperCase() + correctName.slice(1);

    return (
        <>
            { submittedAlready === false ?
                <form onSubmit = {SubmitUserInputText}>
                    <label htmlFor="pokemonInputTextArea">Guess who I am?</label>
                    <input type="text" id = "pokemonInputTextArea"  onChange={GetUserInputText}/>
                    <button onClick={userInputSubmitting}>Submit!</button>
                </form>
            : null
            }
            <div>
                {correctName === userInputText.toLowerCase()&&submittedAlready===true  ? <p>You got it! {upperCasePokemonName}! I choose you!</p>
                : submittedAlready===true ? <p>Oh no, it is {upperCasePokemonName}, let's try next Pokemon!</p>
                : null
                }
            </div>
        </>
    )
}

export default AnswerTheName;
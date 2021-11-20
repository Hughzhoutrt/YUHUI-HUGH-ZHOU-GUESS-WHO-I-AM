import './App.scss';
import { useState } from 'react';

function AnswerTheName(props) {
    console.log(props.correctName);
    const { correctName, pokemonFog, setPokemonFog, poperationBarShow, setOperationBarShow} = props;
    const [userInputText, setUserInputText] = useState('');
    const [submittedAlready, setSubmittedAlready] = useState(false);
    const [namePrompt, setNamePrompt] = useState(false);

    const GetUserInputText = (event) => {
        setUserInputText(event.target.value);
    }

    const SubmitUserInputText = (event) => {
        event.preventDefault();
        setSubmittedAlready(!submittedAlready);
        setNamePrompt(!namePrompt);
    }

    const userInputSubmitting = () => {
        setPokemonFog(!pokemonFog);
        setOperationBarShow(!poperationBarShow);
    }

    const resetNamePrompt = () => {
        setNamePrompt(false);
    }

    const upperCasePokemonName = correctName.slice(0, 1).toUpperCase() + correctName.slice(1);

    return (
        <>
            {submittedAlready === false ?
                <form onSubmit={SubmitUserInputText}>
                    <label htmlFor="pokemonInputTextArea">Guess who I am?</label>
                    <div>
                        <input type="text" id="pokemonInputTextArea" onChange={GetUserInputText} />
                        <button onClick={userInputSubmitting}>Submit!</button>
                    </div>
                </form>
                : null
            }
            <div onClick={resetNamePrompt}>
                {correctName === userInputText.toLowerCase() && namePrompt ? 
                <div className="pokemonNamePrompt">
                    <p>You got it! {upperCasePokemonName}! I choose you!</p>
                </div>
                : namePrompt ? 
                <div className="pokemonNamePrompt">
                    <p>Oh no, it is {upperCasePokemonName}, let's try next Pokemon!</p>
                </div>
                : null
                }
            </div>
        </>
    )
}

export default AnswerTheName;
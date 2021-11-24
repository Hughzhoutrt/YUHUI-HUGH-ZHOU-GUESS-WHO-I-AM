import './App.scss';
import { useState } from 'react';
import useSound from 'use-sound';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';

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

    const [playHoverSound] = useSound(HoverSound);
    const [playClickSound] = useSound(ClickSound);

    return (
        <>
            <section>
                {submittedAlready === false ?
                    <form onSubmit={SubmitUserInputText} className="guessNameInput pokemonStyleBorder">
                        <label htmlFor="pokemonInputTextArea">Guess who I am?</label>
                        <div>
                            <input onClick={playHoverSound} type="text" id="pokemonInputTextArea" onChange={GetUserInputText} />
                            <button onMouseEnter={playHoverSound} onClick={()=> {playClickSound(); userInputSubmitting();}}>Submit!</button>
                        </div>
                    </form>
                    : null
                }
            </section>
            <section onClick={()=>{resetNamePrompt(); playClickSound();}} onMouseEnter={playHoverSound}>
                {correctName === userInputText.toLowerCase() && namePrompt ? 
                <div className="pokemonNamePrompt pokemonStyleBorder">
                    <p>You got it! <span>{upperCasePokemonName}</span>! I choose you!</p>
                </div>
                : namePrompt ? 
                <div className="pokemonNamePrompt pokemonStyleBorder">
                    <p>Oh no, it is <span>{upperCasePokemonName}</span>, let's try next Pokemon!</p>
                </div>
                : null
                }
            </section>
        </>
    )
}

export default AnswerTheName;
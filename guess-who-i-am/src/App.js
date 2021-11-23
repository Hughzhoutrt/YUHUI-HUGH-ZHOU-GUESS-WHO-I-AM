import './App.scss';
import {useState } from 'react';
import GetPokemonData from './GetPokemonData';
import OperationBar from './OperationBar';
import Header from './Header';
import Pokedex from './Pokedex';
import HeroBackImg from './imgs/heroBack.png';
import Footer from './Footer';
import useSound from 'use-sound';
import BattleMusic from './audios/battleMusic.mp3';
import HoverSound from './audios/buttonSoundHover.mp3';
import ClickSound from './audios/buttonSoundClick.mp3';


function App() {
  const [pokemonAppear, setPokemonAppear] = useState(false); //Get state from "App" and "./OperationBar" to "App" and "./Pokedex", for opening or closing main inferface and Pokedex inferface

  const [pokemonName, setPokemonName] = useState(''); //Get pokemon name state from "./GetPokemonData" to "./Pokedex"
  const [pokemonImg, setPokemonImg] = useState(''); //Get pokemon image state from "./GetPokemonData" to "./Pokedex"

  const [operationBarShow, setOperationBarShow] = useState(false); //Get state from "./GetPokemonData" and "./OperationBar" to "App", once users submitted the input then operation bar shown
  const [pokedexShow, setPokedexShow] = useState(false); //Get state from "./OperationBar" to "./Pokedex", for opening or closing Pokedex inferface

  const [headerDisplay, setHeaderDisplay] = useState(true);

  const [stopMusicDisplay, setStopMusicDisplay] = useState(true);

  const [stopBattleMusicDisplay, setStopBattleMusicDisplay] = useState(false);

  const [catchPokemon, setCatchPokemon] = useState(false); 

  const [userSignIn, setUserSignIn] = useState(false);

  const [userName, setUserName] = useState('');

  const [userPokemonNumber, setUserPokemonNumber] = useState(0);

  const [pokemonListShow, setPokemonListShow] = useState(false);

  const letPokemonAppear = () => {
    setStopBattleMusicDisplay(false);
    setPokemonAppear(!pokemonAppear);
    setHeaderDisplay(!headerDisplay);
  }

  const [playMusic,  {stop}] = useSound(BattleMusic);

  const [playHoverSound] = useSound(HoverSound);

  const [playClickSound] = useSound(ClickSound);

  const stopBattleMusic =() => {

    if (pokemonAppear) {
      setStopMusicDisplay(!stopMusicDisplay);
    }
  }

  const UserNameInput = (event) => {
    setUserName(event.target.value);

  }

const UserNameSubmit = (event) => {
    event.preventDefault();
  }

const UserNameSubmitButton = () => {
    if(userName === '') {
      alert (`Please enter your user name for your Pokémon list!`)
    } else {
    setUserSignIn(true);
    }
  }
  
  return (
    <main className="App">
      <Header headerDisplay={headerDisplay}/>
      {userSignIn === false?
                <section className="userNameInputForm pokemonStyleBorder">
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
      {!pokemonAppear && userSignIn? <button className="openingButton pokemonStyleBorder" onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); playMusic();letPokemonAppear();}}>Ready to meet a wild Pokémon?</button> : null}
      </section>
      {pokemonAppear ? <GetPokemonData operationBarShow={operationBarShow}
        setOperationBarShow={setOperationBarShow}
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        pokemonImg={pokemonImg}
        setPokemonImg={setPokemonImg} 
        catchPokemon={catchPokemon}
        userName={userName}
        userPokemonNumber={userPokemonNumber}
        setUserPokemonNumber={setUserPokemonNumber}
        pokemonListShow={pokemonListShow}/>
        : null}
      {<Pokedex pokemonName={pokemonName}
        pokemonImg={pokemonImg}
        pokedexShow={pokedexShow}
        pokemonAppear={pokemonAppear}/>}
      {operationBarShow && pokemonAppear ?
        <section>
          <OperationBar pokedexShow={pokedexShow}
            setPokedexShow={setPokedexShow}
            pokemonAppear={pokemonAppear}
            setPokemonAppear={setPokemonAppear}
            operationBarShow={operationBarShow}
            setOperationBarShow={setOperationBarShow} 
            setHeaderDisplay={setHeaderDisplay}
            setStopMusicDisplay={setStopMusicDisplay}
            setStopBattleMusicDisplay={setStopBattleMusicDisplay}
            catchPokemon={catchPokemon}
            setCatchPokemon={setCatchPokemon}
            userPokemonNumber={userPokemonNumber}
            pokemonListShow={pokemonListShow}
            setPokemonListShow={setPokemonListShow}/>
        </section>
        : null}
      <img className="heroBack" src={HeroBackImg} alt="Pokémon trainer's back view"/>
      {pokemonAppear ?
      <button onMouseEnter={playHoverSound} className={stopMusicDisplay? "stopMusicButton pokemonStyleBorder" : "stopMusicButton pokemonStyleBorder stopButtonHide" } onClick={()=>{playClickSound(); stop(); stopBattleMusic();}} onToggle={stopBattleMusicDisplay ? stop() : null}><i className="fas fa-volume-mute" aria-label="Stop battle music"></i>Stop Battle Music!</button>
      : null}
      <Footer />
    </main>
  );
}

export default App;

// letPokemonAppear()
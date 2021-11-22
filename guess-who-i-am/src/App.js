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
  
  return (
    <main className="App">
      <Header headerDisplay={headerDisplay}/>
      {pokemonAppear ? <GetPokemonData operationBarShow={operationBarShow}
        setOperationBarShow={setOperationBarShow}
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        setPokemonImg={setPokemonImg} 
        catchPokemon={catchPokemon}/>
        : null}
      {<Pokedex pokemonName={pokemonName}
        pokemonImg={pokemonImg}
        pokedexShow={pokedexShow}
        pokemonAppear={pokemonAppear}
      />}
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
            setCatchPokemon={setCatchPokemon}/>
        </section>
        : null}
      <section>
        {!pokemonAppear ? <button className="openingButton pokemonStyleBorder" onMouseEnter={playHoverSound} onClick={()=>{playClickSound(); playMusic();letPokemonAppear();}}>Ready to meet a wild Pokémon?</button> : null}
      </section>
      <img className="heroBack" src={HeroBackImg} alt="Pokémon trainer's back view" />
      <button onMouseEnter={playHoverSound} className={stopMusicDisplay? "stopMusicButton pokemonStyleBorder" : "stopMusicButton pokemonStyleBorder stopButtonHide" } onClick={()=>{playClickSound(); stop(); stopBattleMusic();}} onToggle={stopBattleMusicDisplay ? stop() : null}><i className="fas fa-volume-mute" aria-label="Stop battle music"></i></button>
      <Footer />
    </main>
  );
}

export default App;

// letPokemonAppear()
import './App.scss';
import { useEffect, useState } from 'react';
import GetPokemonData from './GetPokemonData';
import OperationBar from './OperationBar';
import Pokedex from './Pokedex';
import HeroBackImg from './imgs/heroBack.png';


function App() {
  const [pokemonAppear, setPokemonAppear] = useState(false); //Get state from "App" and "./OperationBar" to "App" and "./Pokedex", for opening or closing main inferface and Pokedex inferface

  const [pokemonName, setPokemonName] = useState(''); //Get pokemon name state from "./GetPokemonData" to "./Pokedex"
  const [pokemonImg, setPokemonImg] = useState(''); //Get pokemon image state from "./GetPokemonData" to "./Pokedex"

  const [operationBarShow, setOperationBarShow] = useState(false); //Get state from "./GetPokemonData" and "./OperationBar" to "App", once users submitted the input then operation bar shown
  const [pokedexShow, setPokedexShow] = useState(false); //Get state from "./OperationBar" to "./Pokedex", for opening or closing Pokedex inferface

  const letPokemonAppear = () => {
    setPokemonAppear(!pokemonAppear);
  }


  return (
    <main className="App">
        {pokemonAppear ? <GetPokemonData operationBarShow={operationBarShow}
          setOperationBarShow={setOperationBarShow}
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
          setPokemonImg={setPokemonImg} />
          : null}
      {<Pokedex pokemonName={pokemonName}
        pokemonImg={pokemonImg}
        pokedexShow={pokedexShow}
        pokemonAppear={pokemonAppear} />}
      {operationBarShow && pokemonAppear ?
        <div>
          <OperationBar pokedexShow={pokedexShow}
            setPokedexShow={setPokedexShow}
            pokemonAppear={pokemonAppear}
            setPokemonAppear={setPokemonAppear}
            operationBarShow={operationBarShow}
            setOperationBarShow={setOperationBarShow} />
        </div>
        : null}
      <div>
        {!pokemonAppear ? <button className="openingButton" onClick={letPokemonAppear}>Ready to meet a wild Pokémon?</button> : null}
      </div>
      <img className="heroBack" src={HeroBackImg} alt="Pokémon trainer's back view"/>
    </main>
  );
}

export default App;

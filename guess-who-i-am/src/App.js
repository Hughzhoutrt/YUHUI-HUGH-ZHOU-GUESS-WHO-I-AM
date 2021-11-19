import './App.scss';
import { useEffect, useState } from 'react';
import GetPokemonData from './GetPokemonData';

function App() {
  const [pokemonAppear, setPokemonApper ] =useState(false);

  const letPokemonAppear = () => {
    setPokemonApper(!pokemonAppear);
  }


  return (
    <main className="App">
    
    
      {!pokemonAppear ? <button onClick={letPokemonAppear}>Ready to meet a wild Pokemon?</button> : null}

      {pokemonAppear ?  <GetPokemonData /> : null }

      {pokemonAppear ? <button onClick={letPokemonAppear}>Leave</button> : null}

      
      

    </main>
  );
}

export default App;

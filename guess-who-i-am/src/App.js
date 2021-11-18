import './App.css';
import { useEffect, useState } from 'react';
import GetPokemonData from './GetPokemonData';

function App() {
  const [pokemonAppear, setPokemonApper ] =useState(false);

  const letPokemonAppear = () => {
    setPokemonApper(!pokemonAppear);
  }


  return (
    <main className="App">

      {pokemonAppear ? <GetPokemonData /> : null }
    
    
      <button onClick={letPokemonAppear}>Ready to meet a wild Pokemon?</button>

      
      

    </main>
  );
}

export default App;

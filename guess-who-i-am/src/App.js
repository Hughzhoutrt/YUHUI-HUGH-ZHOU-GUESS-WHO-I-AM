import './App.scss';
import { useEffect, useState } from 'react';
import GetPokemonData from './GetPokemonData';
import Pokedex from './Pokedex';
import Catch from './Catch';
import Battle from './Battle';

function App() {
  const [pokemonAppear, setPokemonApper ] =useState(false);
  const [operationBarShow, setOperationBarShow] = useState(false);

  const letPokemonAppear = () => {
    setPokemonApper(!pokemonAppear);
  }


  return (
    <main className="App">
      {pokemonAppear ?  <GetPokemonData operationBarShow={operationBarShow} setOperationBarShow={setOperationBarShow}/> : null }

      <div>
        {!pokemonAppear ? <button onClick={letPokemonAppear}>Ready to meet a wild Pokemon?</button> : null}
      </div>

      {operationBarShow && pokemonAppear ?
        <div> 
          <Pokedex />
          <Catch />
          <Battle />
          <button onClick={letPokemonAppear}>Leave</button> 
        </div>
      : null}
      
      

    </main>
  );
}

export default App;

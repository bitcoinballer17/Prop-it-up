import React, { useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [pokemon, setPokemon] = useState ([]);
  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=807")
    .then(resp => resp.json())
    
    .then(resp => setPokemon(resp.results))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <button onClick={(e)=>handleClick(e)}>Fetch Pokemons</button>
      {pokemon.map((p,idx)=>{
        return <h1 key={idx}>{p.name}</h1>
      })}
    </div>
  );
}

export default App;

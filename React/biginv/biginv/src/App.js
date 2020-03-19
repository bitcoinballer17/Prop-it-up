import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PlaceCard from './components/PlaceCard';

function App(){
  return(
      <div className="App">
        <PlaceCard firstName={'Will'} lastName={'Purdue'} age={44} hairColor={'yellow'}/>
        <PlaceCard firstName={'Horace'} lastName={'Grant'} age={57} hairColor={'rainbow'}/>
        <PlaceCard firstName={'Scotty'} lastName={'Pippen'} age={52} hairColor={'red'}/>
        <PlaceCard firstName={'Dennis'} lastName={'Rodman'} age={45} hairColor={'yellow, green, blue, pink'}/>
      </div>
  );
}
export default App;

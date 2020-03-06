import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Will'} lastName={'Purdue'} age={44} hairColor={'yellow'}/>
      <PersonCard firstName={'Horace'} lastName={'Grant'} age={57} hairColor={'rainbow'}/>
      <PersonCard firstName={'Scotty'} lastName={'Pippen'} age={52} hairColor={'red'}/>
      <PersonCard firstName={'Dennis'} lastName={'Rodman'} age={45} hairColor={'yellow, green, blue, pink'}/>
    </div>

  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PlaceCard from './components/PlaceCard';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        persons: [
          {firstName:'Will', lastName:'Purdue', age:44, hairColor:'yellow'},
          {firstName:'Horace', lastName:'Grant', age:57, hairColor:'rainbow'},
          {firstName:'Scotty', lastName:'Pippen', age:52, hairColor:'pink'},
          {firstName:'Dennis', lastName:'Rodman', age:45, hairColor:'yellow, green, blue, pink'}
        ]
      }
      this.handleAgeClick = this.handleAgeClick.bind(this);
    }

    handleAgeClick(e,idx){
      e.preventDefault();
      this.setState(prevState => {
        return {
          age: prevState.persons[idx].age ++
        }
      })
    }

    render(){
      return (
        <div className='App'>
          {
            this.state.persons.map((p,idx) => {
              return <PlaceCard
                        firstName={p.firstName}
                        lastName={p.lastName}
                        age={p.age}
                        hairColor={p.hairColor}
                        key={idx}
                        idx={idx}
                        handleClick={this.handleAgeClick}
                    />
            })
          }
        </div>
      );  
        
    }
  }

export default App;

import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  
    this.state= {
      monsters: [
        {
          name: 'Linda',
          id: '12e1231e'
        },
        {
          name: 'Frank',
          id: '13549fh'
        },
        {
          name: 'Jacky',
          id: 'a09d8'
        },
        {
          name: 'Yaser',
          id: 'k34j5ngh'
        },
      ]
  };
}

  render () {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key= {monster.id}><h1>{monster.name}</h1></div>;
          })
        }
    
      </div> 
    )
  }
}


export default App;

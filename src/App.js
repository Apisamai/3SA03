import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "Love", "Art", "Random", "Bye"];

var word_random = word[Math.floor(Math.random() * word.length)];

   class App extends Component {
    newgame = () => {
      window.location.reload(false);
    }
    render() {
    return (
        <div className="App">
          <h1 id = 'title'>Game Logic</h1>        
          <WordCard value={word_random}/>
          <h2 id="H2">Attempt : 0</h2>
          <h3 id = 'word'><br></br></h3>
          <button id="newgame" className="button" onClick={this.newgame}>New Game</button>
        </div>
    );
    }
   }
export default App;
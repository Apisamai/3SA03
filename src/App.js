import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "Love", "Art", "Random", "Bye"];
var word_random = word[Math.floor(Math.random() * word.length)];

   class App extends Component {
    constructor() {
      super()
      this.state = {
        isSurrenderConfirm: false,
      };
      
    }
    new_game = () => {
      window.location.reload(false);
    }
    render() {

    return (
        <div className="App">
          <h1 id = 'title'>Game Logic</h1>        
          <WordCard value={word_random} isSurrenderConfirm={this.state.isSurrenderConfirm} getAnswer={this.getAnswer} />
          <h2 id="H2">Attempt : 0</h2>
          <h3 id = 'word'><br></br></h3>
          <button id="new_game" className="button" onClick={this.new_game}>New Game</button>
          <h4 id="Answer"></h4>
        </div>
    );
    }
   }
export default App;
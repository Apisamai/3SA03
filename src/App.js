import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import img from "./img1.gif";
import img2 from "./img2.gif";
const word = ["Hello", "Love", "Art", "Random", "Bye"];
var word_random = word[Math.floor(Math.random() * word.length)];

   class App extends Component {
 
    new_game = () => {
      window.location.reload(false);
    }
    render() {

    return (
        <div className="App">
          <h1 id = 'title'><img src={img}></img> Game Logic <img src={img2}></img></h1>        
          <WordCard value={word_random} />
          <h2 id="H2">Attempt : 0</h2>
          <h3 id = 'word'><br></br></h3>
          <button id="new_game" className="button" onClick={this.new_game}>New Game</button>
          <h4 id="Answer"></h4>
        </div>
    );
    }
   }
export default App;
import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = ["Hello", "Love", "Art"];
var word_random = word[Math.floor(Math.random() * word.length)];

   class App extends Component {
    render() {
    return (
      <div className="App">
        <WordCard value={word_random}/>
        <h2 id = 'word'></h2>
        {/* <h3 id = 'score'>Score :</h3>  */}
      </div>
   
    );
    }
   }
export default App;
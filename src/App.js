import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
import img from "./img1.gif";
import img2 from "./img2.gif";
const word = ["Hello", "Love", "Art", "Random", "Bye"];
var word_random = word[Math.floor(Math.random() * word.length)];

   class App extends Component {
    constructor(){
      super()
      this.state = {
          hint : 0,
          isHint: false
      }
    }
 
    new_game = () => {
      window.location.reload(false);
    }
    
    Hint = () => {
      this.setState({
        hint: this.state.hint+1,
        isHint: true
      })
    }
    getHint = (chars) => {
      document.getElementById('hint').innerHTML += `${chars} `
      this.setState({isHint:false})
    }
    render() {

    return (
        <div className="App">
          <h1 id = 'title'><img src={img}></img> Game Logic <img src={img2}></img></h1>        
          <WordCard value={word_random} {...this.state} getHint={this.getHint} />
          <h2 id = "H2">Attempt : 0</h2>
          <h3 id = 'word'><br></br></h3>
          <h4 id = "hint"></h4>
          <button id="new_game" className="button" onClick={this.new_game}>New Game</button>
          <button id="hint_button" className="button" onClick={this.Hint}>Hint</button>
          <h5 id="Answer"></h5>
        </div>
    );
    }
  }

export default App;
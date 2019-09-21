import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
   class App extends Component {
    render() {
    return (
      <div className="App">
        <WordCard value="Hello"/>
        <h2 id = 'word'></h2>
      </div>
   
    );
    }
   }
export default App;
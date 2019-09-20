import React, { Component } from 'react';
import _ from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}
export default class WordCard extends Component {

        constructor(props){
            super(props)
            this.state = prepareStateFromWord(this.props.value) 
        }
        activationHandler = (c) => {
            console.log(`${c} has been activated. ${this.state.chars} ${this.state.guess}`)
            let guess = [...this.state.guess, c.toUpperCase()]
            this.setState({guess})
            if(guess.length == this.state.chars.length){
                if(guess.join('').toString() == this.state.chars.join('').toString()){
                    this.setState({guess: [], completed: true})
                    console.log(`You Win!!`)
                }else{
                    this.setState({guess: [], attempt: this.state.attempt + 1})
                    console.log(`You Lost!! ${this.state.guess.join('').toString()} ${this.state.chars.join('').toString()}`)
                }
            }
        }
    render() {
    return (
        <div>
                { Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} {...this.state}/>) }
        </div>
            );
    }
}
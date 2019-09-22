import React, { Component } from 'react';
export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
        }
       
        activate = () => {
            if(!this.state.active){
                this.props.activationHandler(this.props.value)
                this.setState({active: true})
            }
        }
        render(){
            let className = `card ${this.state.active ? 'activeCard': ''}`
            return (
                <div className={className} onClick={this.activate}>
                {this.props.value}
                </div>
            )
        }

        componentDidUpdate(prevProps){
            // console.log(this.props.attempt)
            // console.log(prevProps.attempt)
            if(prevProps.attempt != this.props.attempt){
                
                setTimeout(() => this.setState({active: false}), 500)
            if(this.props.attempt > 5){
                document.getElementById('word').innerHTML = "Game Over" 
                document.getElementById('Answer').innerHTML = `Answer : ${this.props.chars.join(' -> ')}`
            }
        }
    }
   }
   
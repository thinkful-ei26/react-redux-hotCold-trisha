import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

//stateful 
export default class Game extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            currentGuess: -1,
            randomNum: Math.floor(Math.random()*101),
            what: false,
            newGame: false, 
            response: 'Make your Guess!', 
            guessCounter: 0,
            guessHistory: []
        }
    }

    handleGuess(guess){
        const diff = Math.abs(guess - this.state.randomNum);
        
        if (diff <= 10){
            this.setState({response: 'HOT'});
        } 
        if (diff > 10){
            this.setState({response: 'COLD'});
        } 
        if (diff === 0){
            this.setState({response: 'WINNER'});
        } 

        this.setState({
            currentGuess: guess,
            guessCounter: (this.state.guessCounter + 1),
            guessHistory: [...this.state.guessHistory, guess ] 
        })
    }

    handleWhatClick() {
        this.setState({
            what: true
        })
    }

    handleGotIt() {
        this.setState({
            what: false
        })
    }

    handleNewGame(){
        this.setState({
            currentGuess: -1,
            randomNum: Math.floor(Math.random()*101),
            what: false,
            newGame: false, 
            response: 'Make your Guess!', 
            guessCounter: 0,
            guessHistory: []
        })
    }
    
    render() {
 
        return (
            <div>
                <Header what={this.state.what}
                handleWhatClick={ () => this.handleWhatClick()}
    
                handleGotIt={ () => this.handleGotIt()}
                
                handleNewGame={ () => this.handleNewGame()}
                />

                <GuessSection 
                feedback={this.state.response} 
                handleGuess={ (guess) => this.handleGuess(guess)}
                />

                <GuessCount count={this.state.guessCounter} />
                <GuessList guesses={this.state.guessHistory} />
            </div>
        );
    }
  
}


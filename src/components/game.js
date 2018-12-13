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
            what: false,
            newGame: false, 
            response: 'hot', 
            userGuess: '50', 
            //guessCounter guessHistory.length
            guessHistory: ['40', '50']
        }
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
    
    render() {
        return (
            <div>
                <Header what={this.state.what}
                handleWhatClick={ (e) => this.handleWhatClick(e)}
                // onClick={ (e) => this.setState({what: true}) }
                handleGotIt={ (e) => this.handleGotIt(e)}
                />
                <GuessSection feedback="Make your guess!" />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
  
}


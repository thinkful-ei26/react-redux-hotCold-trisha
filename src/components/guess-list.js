import React from 'react';
import { connect } from 'react-redux';
import './guess-list.css';

function GuessList(props) {
    console.log('GuessList props', props.guessHistory)
    const guesses = props.guessHistory.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    guessHistory: state.guessHistory
  });
  
  export default connect(mapStateToProps)(GuessList);
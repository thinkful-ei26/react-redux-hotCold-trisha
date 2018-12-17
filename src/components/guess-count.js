import React from 'react';
import './guess-count.css';
import { connect } from 'react-redux';

export function GuessCount(props) {
    // console.log('props.guessCounter in <GuessCounter/>', props.guessCounter);
    return (
        <p> Guess #<span id="count">{props.guessCounter}</span>! </p>
    );
}

const mapStateToProps = (state) => ({
    guessCounter: state.guessCounter
  });
  
  export default connect(mapStateToProps)(GuessCount);
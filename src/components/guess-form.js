import React from 'react';
import { connect } from 'react-redux';
import { handleGuess } from '../actions';
import './guess-form.css';

export function GuessForm(props) {
    return (
        <form 
        onSubmit={ (e) => {
            e.preventDefault();
            // console.log('Guess button was clicked', e.currentTarget.elements.userGuess.value);
            props.dispatch(handleGuess(e.currentTarget.elements.userGuess.value));
            } 
        }>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
            />
        </form>
    );
};

const mapStateToProps = state => ({
    currentGuess: state.guess,
    guessCounter: (state.guessCounter + 1),
    guessHistory: [state.guessHistory] 
});

export default connect(mapStateToProps)(GuessForm);
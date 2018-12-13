import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={ (e) => {e.preventDefault();console.log('Guess button was clicked')} }>
            <input type="text" name="userGuess" id="userGuess"
                onChange={e => console.log(e.currentTarget.value)}
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
            />
        </form>
    );
};


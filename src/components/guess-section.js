import React from 'react';
import { connect } from 'react-redux';
import GuessForm from './guess-form';

import './guess-section.css';

function GuessSection(props) {
    // console.log('GuessSection props', props);
    return (
        <section>
            <h2 id="feedback">{props.response}</h2>
            <GuessForm 
            // handleGuess={(guess) => props.handleGuess(guess)}
            />
        </section>
    );
}

const mapStateToProps = (state) => ({
    response: state.response,
  });

  export default connect(mapStateToProps)(GuessSection);
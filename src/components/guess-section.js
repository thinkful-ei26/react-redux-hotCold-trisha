import React from 'react';
import { connect } from 'react-redux';
import GuessForm from './guess-form';

import './guess-section.css';

function GuessSection(props) {
    return (
        <section>
            <h2 id="feedback">{props.response}</h2>
            <GuessForm />
        </section>
    );
}

const mapStateToProps = (state) => ({
    response: state.response,
});

export default connect(mapStateToProps)(GuessSection);
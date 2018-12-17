import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default function Game(props) {
    return (
        <div className="game">
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );
}
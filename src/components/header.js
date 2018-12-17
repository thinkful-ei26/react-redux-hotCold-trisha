import React from 'react';

import TopNav from './top-nav';
// import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {

    // if(props.what === true) {
    //     return (
    //     <InfoModal 
    //         what={props.what} 
    //         handleGotIt={ props.handleGotIt}
    //     />)
    // }

    return (
        <header>
            <TopNav 
            // what={props.what}
            // handleWhatClick={props.handleWhatClick}
            // handleNewGame={props.handleNewGame}
            />
            <h1>HOT or COLD</h1>
        </header>
    );
};

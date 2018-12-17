import React from 'react';
import { handleWhatClick, newGame } from '../actions';
import { connect } from 'react-redux';
import InfoModal from './info-modal';

import './top-nav.css';

function TopNav(props) {

    if(props.what === true) {
        return (
        <InfoModal 
        /* handleGot it needs to be moved inside the component */
            // what={props.what} 
            // handleGotIt={ props.handleGotIt }
            // onClick={ () => props.dispatch(handleGotIt()) }
        />)
    }
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a 
                    className="what" href="#what"
                    onClick={ () => props.dispatch(handleWhatClick()) }
                    // what={props.what}
                    >
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#new"
                    onClick={ () => props.dispatch(newGame()) }
                    >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

//we don't need defaultProps because that's in reducer already 
// TopNav.defaultProps = {
//     what: false
// };

export const mapStateToProps = state => ({
    what: state.what
});

export default connect(mapStateToProps)(TopNav);


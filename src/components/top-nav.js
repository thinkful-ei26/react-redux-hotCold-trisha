import React from 'react';
import { handleWhatClick, newGame } from '../actions';
import { connect } from 'react-redux';
import InfoModal from './info-modal';

import './top-nav.css';

function TopNav(props) {

    if(props.what) {
        return ( < InfoModal />)
    }
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#what"
                    onClick={ () => props.dispatch(handleWhatClick()) } >
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

//our reducer has initialState so TopNav.defaultProps() is not needed 

export const mapStateToProps = state => ({
    what: state.what
});

export default connect(mapStateToProps)(TopNav);


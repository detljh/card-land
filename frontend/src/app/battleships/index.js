import BattleshipsContainer from './BattleshipsContainer';
import React from 'react';
import Radium, { StyleRoot } from 'radium';

class Battleships extends React.Component {
    render() {
        return (
            <StyleRoot>
                <BattleshipsContainer />
            </StyleRoot>
        )
    }
}

export default Radium(Battleships);
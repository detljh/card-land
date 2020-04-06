import TicTacToeContainer from './TicTacToeContainer';
import React from 'react';
import Radium, { StyleRoot } from 'radium';

class TicTacToe extends React.Component {
    render() {
        return (
            <StyleRoot>
                <TicTacToeContainer />
            </StyleRoot>
        )
    }
}

export default Radium(TicTacToe);
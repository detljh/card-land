import React from 'react';
import Radium from 'radium';
import GameOverUIContainer from '../utils/GameOverUIContainer';
import GameTurnUIContainer from '../utils/GameTurnUIContainer';
import styles from './styles.Game.css';
import SquareContainer from './SquareContainer';

class GameComponent extends React.Component {
    render() {
        return (
            /* {
                (!this.props.opponent || (!this.props.finished && !this.props.isTurn)) ?
                <GameTurnUIContainer /> :
                <GameOverUIContainer />
            } */

            <div style={styles.game}>
                <div style={styles.board}>
                    {
                        Array.from(new Array(121), (e, index) => 
                        <SquareContainer key={`square-${index}`} id={index} isOpponentBoard={false} />
                        )
                    }
                </div>
                <div style={styles.board}>
                    {
                        Array.from(new Array(121), (e, index) => 
                        <SquareContainer key={`square-opponent-${index}`} id={index} isOpponentBoard={true} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Radium(GameComponent);
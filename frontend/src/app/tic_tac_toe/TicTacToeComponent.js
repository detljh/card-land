import React from 'react';
import styles from './styles.TicTacToe.css';
import history from '../../history';
import SquareContainer from './SquareContainer';
import Radium from 'radium';
import GameOverUIContainer from '../utils/GameOverUIContainer';
import GameTurnUIContainer from '../utils/GameTurnUIContainer';
import GameHeaderContainer from '../utils/GameHeaderContainer';

class TicTacToeComponent extends React.Component {
    componentDidMount() {
        if (!this.props.queued) {
            history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.leave();
    }

    render() {
        return (
            <div style={styles.page}>
                {
                    (!this.props.opponent || (!this.props.finished && !this.props.isTurn)) ?
                    <GameTurnUIContainer /> :
                    <GameOverUIContainer />
                }

                <GameHeaderContainer />

                <div style={styles.main}>
                    <div style={styles.game}>
                        {
                            Array.from(new Array(9), (e, index) => 
                            <SquareContainer key={`square-${index}`} id={index} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(TicTacToeComponent);
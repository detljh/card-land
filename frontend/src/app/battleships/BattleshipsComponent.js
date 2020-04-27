import React from 'react';
import history from '../../history';
import Radium from 'radium';
import GameHeaderContainer from '../utils/GameHeaderContainer';
import GameOverUIContainer from '../utils/GameOverUIContainer';
import GameAlertUIContainer from '../utils/GameAlertUIContainer';
import styles from './styles.Battleships.css';
import GameContainer from './GameContainer';
import ShipArrangeContainer from './ShipArrangeContainer';

class BattleshipsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.queued) {
            history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.leave();
    }

    render() {
        let playersReady = [];
        if (this.props.playerOneState) {
            playersReady.push(this.props.playerOneState.username);
        }
        if (this.props.playerTwoState) {
            playersReady.push(this.props.playerTwoState.username);
        }
        return (
            <div style={styles.page}>
                {
                    this.props.shipArrangeScreen ?
                    this.props.finishedShipArrange &&
                    <GameAlertUIContainer text="Waiting for Opponent" /> :
                    !this.props.opponent ? 
                    <GameAlertUIContainer text="Opponent Has Left" /> :
                    (!this.props.finished && !this.props.isTurn) ?
                    <GameAlertUIContainer text="Opponent's Turn" /> :
                    <GameOverUIContainer />
                }
                <GameHeaderContainer readyScreen={this.props.shipArrangeScreen} playersReady={playersReady} />

                <div style={styles.main}>
                    {
                        this.props.shipArrangeScreen ?
                        <ShipArrangeContainer /> :
                        <GameContainer />
                    }
                </div>
            </div>
        )
    }
}

export default Radium(BattleshipsComponent);
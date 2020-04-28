import React from 'react';
import history from '../../history';
import Radium from 'radium';
import GameHeaderContainer from '../utils/GameHeaderContainer';
import GameOverUIContainer from '../utils/GameOverUIContainer';
import styles from './styles.Battleships.css';
import GameContainer from './GameContainer';
import ShipArrangeContainer from './ShipArrangeContainer';
import AlertUIContainer from '../utils/AlertUIContainer';

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
                    <AlertUIContainer alert="Waiting for Opponent" isClickAlert={true} /> :
                    !this.props.opponent ? 
                    <AlertUIContainer alert="Opponent Has Left" isClickAlert={true} /> :
                    (!this.props.finished && !this.props.isTurn) ?
                    <AlertUIContainer alert="Opponent's Turn" isClickAlert={true} /> :
                    <GameOverUIContainer />
                }

                <AlertUIContainer alert={this.props.alert} isClickAlert={false} />

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
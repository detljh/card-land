import React from 'react';
import Radium from 'radium';
import PlayerInfoComponent from '../utils/PlayerInfoComponent';
import HomeButtonComponent from './HomeButtonComponent';
import styles from './styles.GameUI.css';

class GameHeaderComponent extends React.Component {
    render() {
        let playersReady = this.props.playersReady;
        if (!this.props.readyScreen) {
            playersReady = null;
        }
        return (
            <div style={styles.header}>
                <HomeButtonComponent />

                <PlayerInfoComponent username={this.props.user.username} isTurn={this.props.isTurn } spin={false} playersReady={playersReady} />
                {
                    this.props.opponent &&
                    <PlayerInfoComponent username={ this.props.opponent.username} isTurn={!this.props.isTurn} spin={true} playersReady={playersReady} />
                }
            </div>
        )
    }
}

export default Radium(GameHeaderComponent);
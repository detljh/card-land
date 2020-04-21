import React from 'react';
import Radium from 'radium';
import PlayerInfoComponent from '../utils/PlayerInfoComponent';
import HomeButtonComponent from './HomeButtonComponent';
import styles from './styles.GameUI.css';

class GameHeaderComponent extends React.Component {
    render() {
        return (
            <div style={styles.header}>
                <HomeButtonComponent />

                <PlayerInfoComponent username={this.props.user.username} isTurn={this.props.isTurn } spin={false}/>
                {
                    this.props.opponent &&
                    <PlayerInfoComponent username={ this.props.opponent.username} isTurn={!this.props.isTurn} spin={true} />
                }
            </div>
        )
    }
}

export default Radium(GameHeaderComponent);
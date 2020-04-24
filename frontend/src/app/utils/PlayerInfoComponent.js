import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';
import styles from './styles.PlayerInfo.css';
import Radium from 'radium';

class PlayerInfoComponent extends React.Component {
    render() {
        let playerInfoStyle = Object.assign({}, styles.playerInfo,
        );
        let turnIndicatorStyle = Object.assign({}, styles.turnIndicator
        );

        let waitForReady = false;
        if (this.props.playersReady) {
            waitForReady = !this.props.playersReady.includes(this.props.username);
        }
        return (
            <div style={playerInfoStyle}>    
                {this.props.username}
                    <CSSTransition
                        in={ this.props.isTurn && !this.props.playersReady }
                        appear={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                        <div style={turnIndicatorStyle}><FontAwesomeIcon icon={faChevronUp} /></div>
                    </CSSTransition>
                    <CSSTransition
                        in={ (this.props.spin && this.props.isTurn) || waitForReady }
                        appear={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                            <div style={styles.spinner}>
                                {
                                    ((this.props.playersReady && waitForReady) || !this.props.playersReady) &&
                                    <FontAwesomeIcon icon={faSpinner} />
                                }
                            </div>
                    </CSSTransition>
                    {
                        (this.props.playersReady && !waitForReady) &&
                        <div style={styles.check}>
                            <FontAwesomeIcon icon={faCheckCircle} />
                        </div>
                    }
            </div>
        )
    }
}

export default Radium(PlayerInfoComponent);
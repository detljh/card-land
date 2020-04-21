import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';
import styles from './styles.PlayerInfo.css';
import Radium from 'radium';

class PlayerInfoComponent extends React.Component {
    render() {
        let playerInfoStyle = Object.assign({}, styles.playerInfo,
            this.props.isTurn && styles.playerInfo.turn  
        );
        let turnIndicatorStyle = Object.assign({}, styles.turnIndicator
        );
        return (
            <div style={playerInfoStyle}>    
                {this.props.username}
                    <CSSTransition
                        in={ this.props.isTurn }
                        appear={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                        <div style={turnIndicatorStyle}><FontAwesomeIcon icon={faChevronUp} /></div>
                    </CSSTransition>
                    <CSSTransition
                        in={ this.props.spin}
                        appear={ true }
                        timeout={ 1000 }
                        classNames="fade"
                        unmountOnExit>
                            <div style={styles.spinner}>
                            {
                                this.props.isTurn && 
                                <FontAwesomeIcon icon={faSpinner} />

                            }
                            </div>
                    </CSSTransition>
            </div>
        )
    }
}

export default Radium(PlayerInfoComponent);
import React from 'react';
import Radium from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import '../transitions.scss';
import styles from './styles.GameUI.css';

class GameOverUIComponent extends React.Component {
    render() {
        let disabledPage = Object.assign({}, styles.disabledPage, styles.disabledPage.finished);
        return (
            <CSSTransition
                in={ this.props.finished }
                appear={ true }
                timeout= { 1000 }
                classNames="fade"
                unmountOnExit>
                <div style={disabledPage}>
                    {
                        this.props.finished && 
                        <div style={styles.endGameBlock.alert}>{this.props.endGameText}</div>
                    }
                    <div style={styles.endGameBlock}>   
                        {
                            !this.props.opponent && !this.props.declinePrompt ?
                            <div style={styles.prompt}>
                                Opponent has left
                            </div> :
                            this.props.resetRequestPrompt ? 
                            <div style={styles.prompt}>
                                Opponent has requested to play again
                                <div style={styles.prompt.promptButtonWrapper}>
                                    <button key={`accept_button`} style={styles.prompt.promptButtonWrapper.button} onClick={this.props.acceptReset}>Accept</button>
                                    <button key={`decline_button`} style={styles.prompt.promptButtonWrapper.button} onClick={this.props.declineReset}>Decline</button>
                                </div>
                            </div> :
                            this.props.waitingResponsePrompt ?
                            <div style={styles.prompt}>
                                Waiting for a response
                                <div style={styles.spinner}><FontAwesomeIcon icon={faSpinner} /></div>
                            </div> :
                            this.props.declinePrompt ?
                            <div style={styles.prompt}>
                                Request declined
                            </div> :
                            this.props.acceptPrompt ? 
                            <div style={styles.prompt}>
                                Request accepted. Game will start in
                                <div>{this.props.countdown}</div>
                            </div> :
                            this.props.finished && <button style={styles.prompt.promptButtonWrapper.button} onClick={this.props.reset}>Play again</button>
                        }
                    </div>
                </div>
            </CSSTransition>
        )
    }
}

export default Radium(GameOverUIComponent);
import React from 'react';
import styles from './styles.TicTacToe.css';
import history from '../../history';
import Square from './SquareContainer';
import PlayerInfoComponent from './PlayerInfoComponent';
import Radium from 'radium';
import ExpireComponent from '../utils/ExpireComponent';
import { CSSTransition } from 'react-transition-group';
import './transitions.scss';

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (!this.props.players.length) {
            history.push('/');
        }
    }

    componentWillUnmount() {
       this.props.leave();
    }

    handleClick() {
        if (!this.props.isTurn) {
            this.setState({
                clicked: true
            });
            setTimeout(() => {
                this.setState({
                    clicked: false
                });
            }, 1000);
        }
    }

    render() {
        let disabledPage = Object.assign({}, styles.disabledPage, 
            this.props.finished && styles.disabledPage.finished
        );

        return (
            <div style={styles.page}>
                {
                    (!this.props.finished && !this.props.isTurn) &&
                    <div style={disabledPage} onClick={() => this.handleClick()}>
                        <ExpireComponent delay={ 1000 }>
                            <CSSTransition
                                in={ this.state.clicked }
                                appear={ true }
                                timeout={ 1000 }
                                classNames="fade"
                                unmountOnExit>
                                <span>Opponent's Turn</span>
                            </CSSTransition>
                        </ExpireComponent>
                    </div>
                }
                {
                    this.props.finished &&
                    <div style={disabledPage}>   
                        {this.props.endGameText}
                        {
                            this.props.resetRequestPrompt ? 
                            <div style={styles.prompt}>
                                Opponent has requested to play again.
                                <div style={styles.prompt.buttonWrapper}>
                                    <button onClick={this.props.acceptReset}>Accept</button>
                                    <button onClick={this.props.declineReset}>Decline</button>
                                </div>
                            </div> :
                            this.props.waitingResponsePrompt ?
                            <div style={styles.prompt}>
                                Waiting for a response
                            </div> :
                            this.props.declinePrompt ?
                            <div>
                                Request declined. Redirecting to homepage
                                {this.props.countdown}
                            </div> :
                            this.props.acceptPrompt ? 
                            <div>
                                Request accepted. Game will start in
                                {this.props.countdown}
                            </div> :
                            <button onClick={this.props.reset}>Play again</button>
                        }
                    </div>
                }
                <div style={styles.header}>
                    <PlayerInfoComponent name={this.props.user.name} isTurn={this.props.isTurn }/>
                    <PlayerInfoComponent name={this.props.opponent ? this.props.opponent.name : null} isTurn={!this.props.isTurn}/>
                </div>
                <div style={styles.main}>
                    <div style={styles.game}>
                        {
                            Array.from(new Array(9), (e, index) => 
                            <Square key={`square-${index}`} id={index} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(TicTacToeComponent);
import React from 'react';
import styles from './styles.TicTacToe.css';
import history from '../../history';
import Square from './SquareContainer';

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.players.length) {
            //history.push('/');
        }
    }

    componentWillUnmount() {
       // this.props.leave();
    }

    render() {
        let disabledPage = Object.assign({}, styles.disabledPage, 
            this.props.finished && styles.disabledPage.finished
        );

        return (
            <div style={styles.page}>
                {
                    (!this.props.finished && !this.props.isTurn) &&
                    <div style={disabledPage}>
                        Opponent's Turn
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
                {this.props.user.name}
                <div style={styles.game}>
                    <Square id="0" />
                    <Square id="1" />
                    <Square id="2" />
                    <Square id="3" />
                    <Square id="4" />
                    <Square id="5" />
                    <Square id="6" />
                    <Square id="7" />
                    <Square id="8" />
                </div>
                {this.props.opponent.name}
            </div>
        )
    }
}

export default TicTacToeComponent;
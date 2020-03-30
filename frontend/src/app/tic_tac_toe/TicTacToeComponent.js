import React from 'react';
import styles from './styles.TicTacToe.css';
import history from '../../history';
import Square from './SquareContainer';

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.players.length != 2) {
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
                    this.props.finished &&
                    <div style={styles.finished}>   
                        {
                            this.props.winner !== null ?
                            this.props.winner :
                            'draw'
                        }
                        <button onClick={this.props.reset}>Play again</button>
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
                {this.props.opponent}
            </div>
        )
    }
}

export default TicTacToeComponent;
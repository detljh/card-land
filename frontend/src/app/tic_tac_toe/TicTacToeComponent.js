import React from 'react';
import styles from './styles.TicTacToe.css';
import history from '../../history';
import SquareComponent from './SquareComponent';

class TicTacToeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        if (this.props.players.length != 2) {
            history.push('/');
        }
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);   
    }

    handleLoad() {
        //history.push('/');
    }

    render() {
        return (
            <div style={styles.page}>
                {this.props.players[0]}
                <div style={styles.game}>
                    <SquareComponent id="square-1" />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                    <SquareComponent />
                </div>
                {this.props.players[1]}
            </div>
        )
    }
}

export default TicTacToeComponent;
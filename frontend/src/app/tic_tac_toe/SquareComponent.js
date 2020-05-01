import React from 'react';
import styles from './styles.Square.css';
import Radium from 'radium';
import { throttle } from 'lodash';

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.takeTurnThrottled = throttle(this.props.takeTurn, 1500);
    }

    componentWillUnmount() {
        this.takeTurnThrottled.cancel()
    }

    setHover(value) {
        if (this.props.squares[this.props.id]) {
            return;
        }

        this.setState({
            hover: value
        });
    }

    click() {
        if (this.props.squares[this.props.id]) {
            return;
        }
        
        this.setState({
            hover: false
        });
        this.takeTurnThrottled(this.props.id);
    }

    render() {
        let isWinSquare = this.props.winSquares.includes(this.props.id);
        let squareStyle = Object.assign({}, styles.square, 
            styles[`square${this.props.id}`],
            this.props.squares[this.props.id] === 'x' && styles.squarePlayerOne,
            this.props.squares[this.props.id] === 'o' && styles.squarePlayerTwo,
            isWinSquare && styles.winSquare);
        return (
            <div style={squareStyle} onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)} onClick = {() => this.click()}>
                {
                    this.state.hover && 
                    <span style={styles.iconHover}>{this.props.currentIcon}</span>
                }
                {
                    this.props.squares[this.props.id] && 
                    <span style={styles.iconPlaced}>{this.props.squares[this.props.id]}</span>
                }
            </div>
        )
    }
}

export default Radium(SquareComponent);
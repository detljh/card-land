import React from 'react';
import styles from './styles.Square.css';
import Radium from 'radium';

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
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
        this.props.takeTurn(this.props.id);
    }

    render() {
        let squareStyle = Object.assign({}, styles.square, styles[`square${this.props.id}`]);
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
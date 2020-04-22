import React from 'react';
import styles from './styles.Square.css';
import Radium from 'radium';

const LABEL_MAP = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J'
}

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

        let isRowLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(this.props.id);
        let isColumnLabel = this.props.id % 11 === 0 && this.props.id != 0; 
        let labelStyle = Object.assign({}, styles.label,
            isColumnLabel && styles.label.columnLabel,
            isRowLabel && styles.label.rowLabel
        );
        let squareStyle = Object.assign({}, styles.square);
        return (
            this.props.id === 0 ?
            <div style={styles.label} /> :
            isRowLabel ?
            <div style={labelStyle}>{LABEL_MAP[this.props.id]}</div> :
            isColumnLabel ? 
            <div style={labelStyle}>{String(this.props.id).slice(1)}</div> :
            <div style={squareStyle} onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)} onClick = {() => this.click()}>
                this.state.hover && 
                <span style={styles.iconHover}></span>
            
                this.props.squares[this.props.id] && 
                <span style={styles.iconPlaced}></span>
            </div>
        )
    }
}

export default Radium(SquareComponent);
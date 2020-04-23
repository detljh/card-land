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
    }

    click() {
        if (this.props.squares[this.props.id]) {
            return;
        }
        
        this.props.takeTurn(this.props.id);
    }

    render() {
        let isRowLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(this.props.id);
        let isColumnLabel = this.props.id % 11 === 0 && this.props.id != 0; 
        let labelStyle = Object.assign({}, styles.label,
            isColumnLabel && styles.label.columnLabel,
            isRowLabel && styles.label.rowLabel
        );

        let hoveredSquare = this.props.hoverSquares.includes(this.props.id);
        let squareStyle = Object.assign({}, styles.square,
            hoveredSquare && styles.square.shipSquare
        );

        return (
            this.props.id === 0 ?
            <div style={styles.label} /> :
            isRowLabel ?
            <div style={labelStyle}>{LABEL_MAP[this.props.id]}</div> :
            isColumnLabel ? 
            <div style={labelStyle}>{String(this.props.id).slice(1)}</div> :
            <div style={squareStyle} onMouseEnter={() => this.props.showShip(this.props.id)} onClick = {() => this.click()}>
            
                <span style={styles.iconHover}>
                    {
                        this.props.shipArrangeScreen ? 
                        (hoveredSquare && !this.props.isValidHover) && 'x' :
                        ''
                    }
                </span>
            
                <span style={styles.iconPlaced}>
                    {
                        this.props.shipArrangeScreen ? 
                        '' :
                        ''
                    }
                </span>
            </div>
        )
    }
}

export default Radium(SquareComponent);
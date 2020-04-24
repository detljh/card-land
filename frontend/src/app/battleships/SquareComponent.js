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
        if (this.props.shipArrangeScreen) {
            this.props.placeShip();
        } else {
            this.props.takeTurn(this.props.id);
        }
    }

    render() {
        let isRowLabel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(this.props.id);
        let isColumnLabel = this.props.id % 11 === 0 && this.props.id != 0; 
        let labelStyle = Object.assign({}, styles.label,
            isColumnLabel && styles.label.columnLabel,
            isRowLabel && styles.label.rowLabel
        );

        let placed = null;
        if (this.props.shipArrangeScreen || !this.props.isOpponentBoard) {
            placed = Object.keys(this.props.placedShips).find(key => {
                return this.props.placedShips[key].includes(this.props.id);
            });
        }
        
        let hoveredSquare = null;

        if (this.props.shipSelected) {
            hoveredSquare = this.props.hoverSquares.includes(this.props.id);
        }
        let squareStyle = Object.assign({}, styles.square,
            hoveredSquare && styles.square.shipSquare,
            placed && styles.square.shipSquare,
            (this.props.isOpponentBoard || this.props.shipArrangeScreen) && styles.square.hover
        );
        
        return (
            this.props.id === 0 ?
            <div style={styles.label} /> :
            isRowLabel ?
            <div style={labelStyle}>{LABEL_MAP[this.props.id]}</div> :
            isColumnLabel ? 
            <div style={labelStyle}>{String(this.props.id).slice(1)}</div> :
            this.props.shipArrangeScreen ?
            <div style={squareStyle} onMouseEnter={() => this.props.showShip(this.props.id)} onClick = {() => this.click()}>
                <span style={styles.iconHover}>
                    {
                        (hoveredSquare && !this.props.isValidHover) && 'x'
                    }
                </span>
            </div> :
            !this.props.isOpponentBoard ?
            <div style={squareStyle}></div> :
            <div style={squareStyle} onClick = {() => this.click()}>
            
                <span style={styles.iconHover}>
                    
                </span>
            
                <span style={styles.iconPlaced}>
                    
                </span>
            </div>
        )
    }
}

export default Radium(SquareComponent);
import React from 'react';
import styles from './styles.Square.css';
import Radium from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

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

        let hitSquare = false;
        if (this.props.isOpponentBoard) {
            hitSquare = this.props.hitSquares.find(square => square.id === this.props.id);
        } else {

        }
        
        let hoveredSquare = null;

        if (this.props.shipSelected) {
            hoveredSquare = this.props.hoverSquares.includes(this.props.id);
        }
        let ownBoardStyle = Object.assign({}, styles.square,
            hoveredSquare && styles.square.shipSquare,
            placed && styles.square.shipSquare,
            this.props.shipArrangeScreen && styles.square.hover
        );
        let opponentBoardStyle = Object.assign({}, styles.square,
            styles.square.hover,
            hitSquare && styles.square.hover
        );
        return (
            this.props.id === 0 ?
            <div style={styles.label} /> :
            isRowLabel ?
            <div style={labelStyle}>{LABEL_MAP[this.props.id]}</div> :
            isColumnLabel ? 
            <div style={labelStyle}>{String(this.props.id).slice(1)}</div> :
            this.props.shipArrangeScreen ?
            <div style={ownBoardStyle} onMouseEnter={() => this.props.showShip(this.props.id)} onClick = {() => this.click()}>
                <div style={styles.icon}>
                    {
                        (hoveredSquare && !this.props.isValidHover) && 'x'
                    }
                </div>
            </div> :
            !this.props.isOpponentBoard ?
            <div style={ownBoardStyle}></div> :
            <div style={opponentBoardStyle} onClick = {() => this.click()}>
                <div style={styles.icon}>
                    {
                        (hitSquare && hitSquare[0].ship) &&
                        <FontAwesomeIcon icon={faBomb} />
                    }
                </div>
            </div>
        )
    }
}

export default Radium(SquareComponent);
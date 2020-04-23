import Creators from './actions';
import sActions from '../../../socket/actions';

const setGameState = Creators.setGameState;
const reset = Creators.reset;
const selectShip = Creators.selectShip;
const rotateShip = Creators.rotateShip;

const takeTurn = () => {
    return (dispatch, getState) => {
        let finished = getState().tic.game.finished;
        if (finished) {
            return;
        }
       
        let status = checkStatus();
       
        let payload = {
        }

        if (status.end) {
            dispatch(sActions.sUpdateGameState(payload));
            dispatch(sActions.sEndGame(status));
        } else {
            dispatch(sActions.sUpdateGameState(payload));
            dispatch(sActions.sEndTurn());
        }
    }
}

const checkStatus = () => {

    return { end: false, winner: null };
}

const showShip = (hoveredSquareId) => {
    return (dispatch, getState) => {
        let id = getState().bs.arrange.shipSelected;
        if (id === null) {
            return;
        }

        let horizontal = getState().bs.arrange.horizontal;
        let isValidHover = true;
        let hoverSquares = [];
        let numSquares = 0;
        if (id === 'carrier') {
            numSquares = 5;
        } else if (id === 'battleship') {
            numSquares = 4;
        } else if (new RegExp(/cruiser/i).test(id)) {
            numSquares = 3;
        } else {
            numSquares = 2;
        }

        for (let i = 0; i < numSquares; i++) {
            if (horizontal) {
                if ((hoveredSquareId + i) % 11 === 0) {
                    isValidHover = false;
                    break;
                }
                hoverSquares.push(hoveredSquareId + i);
            } else {
                if (hoveredSquareId + (11 * i) > 121) {
                    isValidHover = false;
                    break;
                }
                hoverSquares.push(hoveredSquareId + (11 * i));
            }
        }

        dispatch(Creators.setHoverSquares(hoverSquares, isValidHover));
    }
}

export default {
    setGameState,
    takeTurn,
    reset,
    selectShip,
    rotateShip,
    showShip
}
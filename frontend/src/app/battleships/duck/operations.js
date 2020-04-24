import Creators from './actions';
import sActions from '../../../socket/actions';

const setGameState = Creators.setGameState;
const reset = Creators.reset;
const rotateShip = Creators.rotateShip;

const takeTurn = () => {
    return (dispatch, getState) => {
        let finished = getState().bs.game.finished;
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

const selectShip = (id) => {
    return (dispatch, getState) => {
        let placedShips = getState().bs.arrange.placedShips;
        if (placedShips[id] && placedShips[id].length > 0) {
            let placedShips = getState().bs.arrange.placedShips;
            let updated = {...placedShips};
            delete updated[id];
            dispatch(Creators.updatePlacedShips(updated));
        }

        dispatch(Creators.setHoverSquares([], true));
        dispatch(Creators.displayReadyButton(false));
        dispatch(Creators.selectShip(id));
    }
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

        let placedShips = getState().bs.arrange.placedShips;
        let keys = Object.keys(placedShips);
        for (let i = 0; i < numSquares; i++) {
            let square = 0;
            if (horizontal) {
                square = hoveredSquareId + i;
                if (square % 11 === 0) {
                    isValidHover = false;
                    break;
                }
            } else {
                square = hoveredSquareId + (11 * i);
                if (square > 121) {
                    isValidHover = false;
                    break;
                }
            }

            if (keys.find(key => placedShips[key].includes(square))) {
                isValidHover = false;
            }
            hoverSquares.push(square);
        }
        dispatch(Creators.setHoverSquares(hoverSquares, isValidHover));
    }
}

const placeShip = () => {
    return (dispatch, getState) => {
        let isValidHover = getState().bs.arrange.isValidHover;
        if (!isValidHover) {
            return;
        }

        let shipSelected = getState().bs.arrange.shipSelected;
        let placedShips = getState().bs.arrange.placedShips;
        let hoverSquares = getState().bs.arrange.hoverSquares;
        let updated = Object.assign({}, placedShips, {
            [shipSelected]: hoverSquares
        });

        dispatch(Creators.updatePlacedShips(updated));
        dispatch(Creators.selectShip(null));

        let numPlaced = Object.keys(updated).length;
        if (numPlaced === 6) {
            dispatch(Creators.displayReadyButton(true));
        }
    }
}

const ready = () => {
    return (dispatch, getState) => {
        let state = {
            username: getState().home.auth.user.username,
            placedShips: getState().bs.arrange.placedShips
        }

        dispatch(sActions.sUpdateGameState(state));
    }
}

export default {
    setGameState,
    takeTurn,
    reset,
    selectShip,
    rotateShip,
    showShip,
    placeShip,
    ready
}
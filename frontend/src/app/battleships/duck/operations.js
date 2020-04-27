import Creators from './actions';
import sActions from '../../../socket/actions';

const setGameState = Creators.setGameState;
const reset = Creators.reset;
const rotateShip = Creators.rotateShip;

const SHIP_MAP = {
    'carrier': 5,
    'battleship': 4,
    'cruiser': 3,
    'submarine': 2,
    totalShips: 6
};

const takeTurn = (id) => {
    return (dispatch, getState) => {
        let finished = getState().bs.game.finished;
        if (finished) {
            return;
        }
       
        let opponentState = {};
        let playerState = {};
        let playerOneState = getState().bs.game.playerOneState;
        let playerTwoState = getState().bs.game.playerTwoState;
        let username = getState().home.auth.user.username;
        let currentPlayer = getState().room.room.currentPlayerIndex;
        if (playerOneState.username === username) {
            playerState = {...playerOneState};
            opponentState = {...playerTwoState};
        } else {
            playerState = {...playerTwoState};
            opponentState = {...playerOneState};
        }
        
        let status = checkStatus(id, currentPlayer, opponentState, playerState);
        let payload = {};
        if (playerOneState.username === username) {
            payload.playerOneState = {...playerState};
            payload.playerTwoState = {...opponentState};
        } else {
            payload.playerOneState = {...opponentState};
            payload.playerTwoState = {...playerState};
        }

        if (status.end) {
            dispatch(sActions.sUpdateGameState(payload));
            dispatch(sActions.sEndGame(status));
        } else {
            dispatch(sActions.sUpdateGameState(payload));
            if (!status.shipHit && !status.shipsDestroyed) {
                dispatch(sActions.sEndTurn());
            }
        }
    }
}

const checkStatus = (id, currentPlayer, opponentState, playerState) => {
    let hit = Object.keys(opponentState.placedShips).find(key => opponentState.placedShips[key].includes(id));
    let hitSquares = playerState.hitSquares ? playerState.hitSquares : [];

    if (hit) {
        let numHit = playerState.hit ? playerState.hit : 0;
        let shipsDestroyed = playerState.shipsDestroyed ? playerState.shipsDestroyed : 0;

        playerState.hitSquares = hitSquares.push({id: id, ship: true});
        playerState.hit += numHit + 1;

        if (SHIP_MAP[hit] === playerState.hit) {
            playerState.shipsDestroyed = shipsDestroyed + 1;
            if (shipsDestroyed === SHIP_MAP.totalShips) {
                return { end: true, winner: currentPlayer };
            }
            return { end: false, winner: null, shipDestroyed: true };
        }
        return { end: false, winner: null, shipHit: true };
    } else {
        playerState.hitSquares = hitSquares.push({id: id, ship: false});
    }
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
        if (/\d/.test(id)) {
            id = id.slice(0, -2);
        }

        let placedShips = getState().bs.arrange.placedShips;
        let keys = Object.keys(placedShips);
        for (let i = 0; i < SHIP_MAP[id]; i++) {
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
        if (numPlaced === 1) {
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
        
        dispatch(Creators.displayReadyButton(false));
        dispatch(Creators.finishShipArrange());
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
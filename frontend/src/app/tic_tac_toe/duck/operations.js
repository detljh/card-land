import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';
import { roomOperations } from '../../loading_room/duck';

const setGameState = Creators.setGameState;

const initialise = () => {
    // order is rows, columns, left diagonal, right diagonal
    return Array.from(new Array(8), () => [0, 0]);
}
let boardStatus = initialise();

const takeTurn = (id) => {
    return (dispatch, getState) => {
        let finished = getState().tic.game.finished;
        if (finished) {
            return;
        }
        let squares = [...getState().tic.game.squares];
        let currentIcon = getState().tic.game.currentIcon;
        
        squares[id] = currentIcon;
        currentIcon = currentIcon === 'x' ? 'o' : 'x';
        
        let turns = getState().tic.game.turns;
        let currentPlayer = getState().room.currentPlayerIndex;
        let payload = {
            squares: squares,
            currentIcon: currentIcon,
            turns: turns + 1
        }
        dispatch(sActions.sUpdateGameState(payload));
        let status = checkStatus(id, turns, currentPlayer);
        if (status.status && status.type === 'win') {
            dispatch(Creators.win(getState().tic.game.players[currentPlayer]));
        } else if (status.status && status.type === 'draw') {
            dispatch(Creators.draw());
        } else {
            dispatch(sActions.sEndTurn());
        }
    }
}

const checkStatus = (id, turns, currentPlayer) => {
    let row = 0;
    let column = 0;
    let diag = 0;

    if (id === "0" || id === "1" || id === "2") {
        row = ++boardStatus[0][currentPlayer];
    } else if (id === "3" || id === "4" || id === "5") {
        row = ++boardStatus[1][currentPlayer];
    } else if (id === "6" || id === "7" || id === "8") {
        row = ++boardStatus[2][currentPlayer];
    }
    
    if (id === "0" || id === "3" || id === "6") {
        column = ++boardStatus[3][currentPlayer];
    } else if (id === "1" || id === "4" || id === "7") {
        column = ++boardStatus[4][currentPlayer];
    } else if (id === "2" || id === "5" || id === "8") {
        column = ++boardStatus[5][currentPlayer];
    } 

    if (id === "0" || id === "4" || id === "8") {
        diag = ++boardStatus[6][currentPlayer];
    } 
    
    if (id === "2" || id === "4" || id === "6") {
        diag = ++boardStatus[7][currentPlayer];
    }

    if (row === 3 || column === 3 || diag === 3) {
        return { status: true, type: 'win' };
    } else if (turns === 9) {
        return { status: true, type: 'draw' };
    }
    return { status: false, type: null };
}

const reset = () => {
    return (dispatch) => {
        boardStatus = initialise();
        dispatch(Creators.reset());
    }
}

export default {
    setGameState,
    takeTurn,
    reset
}
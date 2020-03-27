import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';

// order is rows, columns, left diagonal, right diagonal
let boardStatus = Array.from(new Array(8), () => [0, 0]);

const takeTurn = (id) => {
    return (dispatch, getState) => {
        let finished = getState().tic.game.finished;
        if (finished) {
            return;
        }
        let squares = [...getState().tic.game.squares];
        let currentIcon = getState().tic.game.currentIcon;
        let currentPlayer = {...getState().tic.game.currentPlayer};
        squares[id] = currentIcon;

        let updatePlayer = {
            id: (currentPlayer.id + 1) % 2,
            icon: currentIcon === 'x' ? 'o' : 'x'
        }
        dispatch(Creators.takeTurn(squares, updatePlayer));
        dispatch(checkStatus(id, currentPlayer.id));
    }
}

const checkStatus = (id, currentPlayer) => {
    return (dispatch, getState) => {
        let turns = getState().tic.game.turns;
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
            dispatch(Creators.win(currentPlayer))
        } else if (turns === 9) {
            dispatch(Creators.draw());
        }
    }
}

const reset = () => {
    return (dispatch) => {

    }
}

export default {
    takeTurn,
    reset
}
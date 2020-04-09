import Creators from './actions';
import sActions from '../../../socket/actions';

const setGameState = Creators.setGameState;
const reset = Creators.reset;

const takeTurn = (id) => {
    return (dispatch, getState) => {
        let finished = getState().tic.game.finished;
        if (finished) {
            return;
        }
        let squares = [...getState().tic.game.squares];
        let currentIcon = getState().tic.game.currentIcon;
        
        squares[id] = currentIcon;
        
        let roomId = getState().home.socket.room;
        let turns = getState().tic.game.turns;
        let currentPlayer = getState().room.room.currentPlayerIndex;
        let boardStatus = [...getState().tic.game.boardStatus];
        let status = checkStatus(id, turns + 1, currentPlayer, boardStatus);
        if (!status.end) {
            currentIcon = currentIcon === 'x' ? 'o' : 'x';
        }
        let payload = {
            roomId: roomId,
            squares: squares,
            currentIcon: currentIcon,
            turns: turns + 1,
            boardStatus: [...boardStatus],
            winSquares: []
        }

        if (status.end) {
            let winSquares = [];
            if (status.winner !== null) {
                boardStatus.forEach((element, index) => {
                    if (element[currentPlayer] === 3) {
                        if (index === 0 || index === 3 || index === 6) {
                            winSquares.push(0);
                        } 
                        if (index === 0 || index === 4) {
                            winSquares.push(1);
                        }
                        if (index === 0 || index === 5 || index === 7) {
                            winSquares.push(2);
                        }
                        if (index === 1 || index === 3) {
                            winSquares.push(3);
                        }
                        if (index === 1 || index === 4 || index === 6 || index === 7) {
                            winSquares.push(4);
                        }
                        if (index === 1 || index === 5) {
                            winSquares.push(5);
                        }
                        if (index === 2 || index === 3 || index === 7) {
                            winSquares.push(6);
                        }
                        if (index === 2 || index === 4) {
                            winSquares.push(7);
                        }
                        if (index === 2 || index === 5 || index === 6) {
                            winSquares.push(8);
                        }
                    }
                });
            }
            payload.winSquares = winSquares;
            dispatch(sActions.sUpdateGameState(payload));
            status.roomId = roomId;
            dispatch(sActions.sEndGame(status));
        } else {
            dispatch(sActions.sUpdateGameState(payload));
            dispatch(sActions.sEndTurn({ roomId: roomId }));
        }
    }
}

const checkStatus = (id, turns, currentPlayer, boardStatus) => {
    let row = 0;
    let column = 0;
    let diag = 0;
    id = String(id);
     
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
        return { end: true, winner: currentPlayer };
    } else if (turns === 9) {
        return { end: true, winner: null };
    }
    return { end: false, winner: null };
}

export default {
    setGameState,
    takeTurn,
    reset
}
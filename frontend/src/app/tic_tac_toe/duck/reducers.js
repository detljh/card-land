import types from './types';
import { combineReducers } from 'redux';

const GAME_INITIAL_STATE = {
    currentIcon: 'x',
    squares: new Array(9),
    turns: 0,
    finished: false,
    winner: null,
    // order is rows, columns, left diagonal, right diagonal
    boardStatus: Array.from(new Array(8), () => [0, 0]),
    winSquares: []
}

const gameReducer = (state=GAME_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_GAME_STATE:
            return Object.assign({}, state,
                action.payload.currentIcon !== undefined && {currentIcon: action.payload.currentIcon},
                action.payload.squares !== undefined && {squares: [...action.payload.squares]},
                action.payload.turns !== undefined && {turns: action.payload.turns},
                action.payload.boardStatus !== undefined && {boardStatus: [...action.payload.boardStatus]},
                action.payload.winner !== undefined && {winner: action.payload.winner},
                action.payload.finished !== undefined && {finished: action.payload.finished},
                action.payload.winSquares !== undefined && {winSquares: action.payload.winSquares}
            );
        case types.RESET:
            return Object.assign({}, GAME_INITIAL_STATE, {
                boardStatus: Array.from(new Array(8), () => [0, 0])
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    game: gameReducer
});
export default reducer;
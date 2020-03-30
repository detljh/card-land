import types from './types';
import { combineReducers } from 'redux';

const GAME_INITIAL_STATE = {
    currentIcon: 'x',
    squares: new Array(9),
    turns: 0,
    finished: false,
    winner: null,
    // order is rows, columns, left diagonal, right diagonal
    boardStatus: Array.from(new Array(8), () => [0, 0])
}

const gameReducer = (state=GAME_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_GAME_STATE:
            return Object.assign({}, state, {
                currentIcon: action.payload.currentIcon,
                squares: [...action.payload.squares],
                turns: action.payload.turns,
                boardStatus: [...action.payload.boardStatus],
                winner: action.payload.winner,
                finished: action.payload.finished
            });
        case types.WIN:
            return Object.assign({}, state, {
                winner: action.winner,
                finished: true
            });
        case types.DRAW:
            return Object.assign({}, state, {
                finished: true
        });
        case types.RESET:
            return GAME_INITIAL_STATE;
        default:
            return state;
    }
}

const reducer = combineReducers({
    game: gameReducer
});
export default reducer;
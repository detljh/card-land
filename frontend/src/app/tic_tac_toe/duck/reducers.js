import types from './types';
import { combineReducers } from 'redux';

const GAME_INITIAL_STATE = {
    currentIcon: 'x',
    squares: new Array(9),
    turns: 0,
    finished: false,
    winner: null
}

const gameReducer = (state=GAME_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TAKE_TURN:
            return Object.assign({}, state, {
                currentIcon: action.currentIcon,
                squares: [...action.squares],
                turns: state.turns + 1
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
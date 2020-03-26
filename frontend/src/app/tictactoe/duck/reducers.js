import types from './types';
import { combineReducers } from 'redux';

const GAME_INITIAL_STATE = {
    players: [],
    countdown: 5
}

const gameReducer = (state=GAME_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.UPDATE_PLAYERS:
            return Object.assign({}, state, {
                players: [...action.players],
                countdown: GAME_INITIAL_STATE.countdown
            });
        case types.COUNTDOWN:
            return Object.assign({}, state, {
                countdown: action.reset ? GAME_INITIAL_STATE.countdown : state.countdown - 1
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    game: gameReducer
});
export default reducer;
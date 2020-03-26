import types from './types';
import { combineReducers } from 'redux';

<<<<<<< HEAD
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
=======
const UI_INITIAL_STATE = {
}

const reducer = combineReducers({
    
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
});
export default reducer;
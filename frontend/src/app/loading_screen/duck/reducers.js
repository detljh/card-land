import types from './types';

const LOADING_INITIAL_STATE = {
    players: [],
    countdown: 5,
    start: false
}

const reducer = (state=LOADING_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.UPDATE_PLAYERS:
            return Object.assign({}, state, {
                players: [...action.players],
                countdown: LOADING_INITIAL_STATE.countdown
            });
        case types.COUNTDOWN:
            return Object.assign({}, state, {
                countdown: action.reset ? LOADING_INITIAL_STATE.countdown : state.countdown - 1
            });
        case types.START_GAME:
            return Object.assign({}, state, {
                start: true
            });
        default:
            return state;
    }
}

export default reducer;
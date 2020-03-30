import types from './types';

const ROOM_INITIAL_STATE = {
    players: [],
    currentPlayerIndex: null,
    opponent: null,
    countdown: 5,
    started: false,
    type: null
}

const reducer = (state=ROOM_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.COUNTDOWN:
            return Object.assign({}, state, {
                countdown: action.reset ? ROOM_INITIAL_STATE.countdown : state.countdown - 1
            });
        case types.UPDATE_ROOM_STATE:
            return Object.assign({}, state, {
                currentPlayerIndex: action.payload.currentPlayerIndex,
                opponent: action.payload.opponent,
                started: action.payload.started,
                players: action.payload.players,
                type: action.payload.type
        });
        case types.END_TURN:
            return Object.assign({}, state, {
                currentPlayerIndex: (state.currentPlayerIndex + 1) % state.players.length
        });
        case types.START_GAME:
            return Object.assign({}, state, {
            });
        
        default:
            return state;
    }
}

export default reducer;
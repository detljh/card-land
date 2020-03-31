import types from './types';
import { combineReducers } from 'redux';

const ROOM_INITIAL_STATE = {
    players: [],
    currentPlayerIndex: null,
    opponent: null,
    countdown: 5,
    started: false,
    type: null
}

const roomReducer = (state=ROOM_INITIAL_STATE, action) => {
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
        default:
            return state;
    }
}

const UI_INITIAL_STATE = {
    resetRequestPrompt: false,
    waitingResponsePrompt: false,
    declinePrompt: false,
    acceptPrompt: false
}

const uiReducer = (state=UI_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESET_REQUEST_PROMPT:
            return Object.assign({}, state, {
                resetRequestPrompt: true
            });
        case types.WAITING_RESPONSE_PROMPT:
            return Object.assign({}, state, {
                waitingResponsePrompt: true
            });
        case types.DECLINE_PROMPT:
            return Object.assign({}, state, {
                declinePrompt: true,
                waitingResponsePrompt: false,
                resetRequestPrompt: false
            });
        case types.ACCEPT_PROMPT:
            return Object.assign({}, state, {
                acceptPrompt: true,
                waitingResponsePrompt: false,
                resetRequestPrompt: false
            });
        case types.RESET_UI:
            return UI_INITIAL_STATE;
        default:
            return state;
    }
}

const reducer = combineReducers({
    room: roomReducer,
    ui: uiReducer
})
export default reducer;
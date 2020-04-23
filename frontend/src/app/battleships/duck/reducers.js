import types from './types';
import { combineReducers } from 'redux';

const GAME_INITIAL_STATE = {
    shipArrangeScreen: true,
    squares: new Array(121)
}

const gameReducer = (state=GAME_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_GAME_STATE:
            return Object.assign({}, state,
                
            );
        case types.RESET:
            return Object.assign({}, GAME_INITIAL_STATE, {
                
            });
        default:
            return state;
    }
}

const ARRANGE_INITIAL_STATE = {
    shipSelected: null,
    hoverSquares: [],
    isValidHover: true,
    horizontal: true,
    placedShips: {}
}

const arrangeReducer = (state=ARRANGE_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SELECT_SHIP:
            return Object.assign({}, state, {
                shipSelected: action.id
            });
        case types.SET_SHIP_HOVER_SQUARES:
            return Object.assign({}, state, {
                hoverSquares: action.hoverSquares,
                isValidHover: action.isValidHover
            });
        case types.ROTATE_SHIP:
            return Object.assign({}, state, {
                horizontal: !state.horizontal,
                hoverSquares: []
            });
        case types.UPDATE_PLACED_SHIPS:
            return Object.assign({}, state, {
                placedShips: action.placedShips,
            });
        case types.CLEAR_SELECTED_SHIP:
            return Object.assign({}, state, {
                shipSelected: null
            });
        default:
            return state;
    }
}

const UI_INITIAL_STATE = {
    displayReadyButton: false
}

const uiReducer = (state=UI_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DISPLAY_READY_BUTTON:
            return Object.assign({}, state, {
                displayReadyButton: action.value
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    game: gameReducer,
    arrange: arrangeReducer,
    ui: uiReducer
});
export default reducer;
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
    horizontal: true
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
                horizontal: !state.horizontal
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    game: gameReducer,
    arrange: arrangeReducer
});
export default reducer;
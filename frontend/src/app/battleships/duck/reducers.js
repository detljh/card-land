import types from './types';
import { combineReducers } from 'redux';

const GAME_INITIAL_STATE = {
    
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

const reducer = combineReducers({
    game: gameReducer
});
export default reducer;
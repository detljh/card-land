import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import roomReducer from './app/loading_room/duck';
import ticReducer from './app/tic_tac_toe/duck';
import bsReducer from './app/battleships/duck';

const rootReducer = combineReducers({
    home: homeReducer,
    room: roomReducer,
    tic: ticReducer,
    bs: bsReducer
});

export default rootReducer;
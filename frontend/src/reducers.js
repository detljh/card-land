import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import roomReducer from './app/loading_room/duck';
import ticReducer from './app/tic_tac_toe/duck';

const rootReducer = combineReducers({
    home: homeReducer,
    room: roomReducer,
    tic: ticReducer
});

export default rootReducer;
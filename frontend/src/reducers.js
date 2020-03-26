import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import ticReducer from './app/tictactoe/duck';

const rootReducer = combineReducers({
    home: homeReducer,
    tic: ticReducer
});

export default rootReducer;
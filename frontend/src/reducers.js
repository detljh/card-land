import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
<<<<<<< HEAD
import ticReducer from './app/tictactoe/duck';

const rootReducer = combineReducers({
    home: homeReducer,
    tic: ticReducer
=======

const rootReducer = combineReducers({
    home: homeReducer
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
});

export default rootReducer;
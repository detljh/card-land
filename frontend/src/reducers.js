import { combineReducers } from 'redux';
import homeReducer from './app/home/duck';
import loadingReducer from './app/loading_screen/duck';
import ticReducer from './app/tic_tac_toe/duck';

const rootReducer = combineReducers({
    home: homeReducer,
    loading: loadingReducer,
    tic: ticReducer
});

export default rootReducer;
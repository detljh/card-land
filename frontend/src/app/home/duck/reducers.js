import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {

}

const loginReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const reducer = combineReducers({
    login: loginReducer
});
export default reducer;
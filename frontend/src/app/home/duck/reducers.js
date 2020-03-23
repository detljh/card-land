import types from './types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    showLoginForm: false,
    showRegisterForm: false
}

const authReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SHOW_LOGIN_FORM:
            return Object.assign({}, state, {
                showLoginForm: true,
                showRegisterForm: false
            });
        case types.HIDE_LOGIN_FORM:
            return Object.assign({}, state, {
                showLoginForm: false
            });
        case types.SHOW_REGISTER_FORM:
            return Object.assign({}, state, {
                showLoginForm: false,
                showRegisterForm: true
            });
        case types.HIDE_REGISTER_FORM:
            return Object.assign({}, state, {
                showRegisterForm: false
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    auth: authReducer
});
export default reducer;
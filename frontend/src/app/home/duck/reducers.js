import types from './types';
import { combineReducers } from 'redux';

const UI_INITIAL_STATE = {
    showLoginForm: false,
    showRegisterForm: false
}

const uiReducer = (state=UI_INITIAL_STATE, action) => {
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

const AUTH_INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
    loading: false
}

const authReducer = (state=AUTH_INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return Object.assign({}, state, {
                isAuthenticated: action.isAuthenticated,
                user: action.user
            });
        case types.USER_LOADING:
            return Object.assign({}, state, {
                loading: true
            });
        default:
            return state;
    }
}

const errorReducer = (state={}, action) => {
    switch (action.type) {
        case types.GET_ERRORS:
            return action.errors;
        default:
            return state;
    }
}

const reducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    errors: errorReducer
});
export default reducer;
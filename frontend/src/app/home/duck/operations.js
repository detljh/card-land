import Creators from './actions';
import axios from 'axios';
import setAuthToken from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import gameTypes from '../../../../../constants/gameTypes';
import wsActions from '../../../socket/actions';

const hideLoginForm = Creators.hideLoginForm;
const hideRegisterForm = Creators.hideRegisterForm;
const setConnection = Creators.setConnection;

const showLoginForm = () => {
    return (dispatch) => {
        dispatch(Creators.errors({}));
        dispatch(Creators.showLoginForm());
    }
}
const showRegisterForm = () => {
    return (dispatch) => {
        dispatch(Creators.errors({}));
        dispatch(Creators.showRegisterForm());
    }
}

const login = (username, password) => {
    return (dispatch) => {
        axios.post('/api/login', { 
            username: username, 
            password: password
        }).then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(Creators.hideLoginForm());
            dispatch(Creators.setCurrentUser(decoded, true));
            dispatch(wsActions.wsAuth(decoded));
        })
        .catch(err => {
            dispatch(Creators.errors(err.response.data));
        });
    }
}

const register = (username, password, confirmPassword) => {
    return (dispatch) => {
        axios.post('/api/register', { 
            username: username, 
            password: password,
            confirmPassword: confirmPassword
        }).then(res => {
            dispatch(Creators.showLoginForm());
        })
        .catch(err => {
            dispatch(Creators.errors(err.response.data));
        });
    }
}

const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("jwtToken");
        setAuthToken(false);
        dispatch(Creators.setCurrentUser({}, false));
        dispatch(wsActions.wsAuth({}));
    }
}

const startGame = (type, ownProps) => {
    return () => {
        if (type === gameTypes.TIC_TAC_TOE) {
            ownProps.history.push('/tic_tac_toe');
        }
    }   
}

export default {
    showLoginForm,
    showRegisterForm,
    hideLoginForm,
    hideRegisterForm,
    login,
    register,
    logout,
    startGame,
    setConnection
}
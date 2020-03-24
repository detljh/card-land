import Creators from './actions';
import axios from 'axios';
import setAuthToken from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

const showLoginForm = Creators.showLoginForm;
const showRegisterForm = Creators.showRegisterForm;
const hideLoginForm = Creators.hideLoginForm;
const hideRegisterForm = Creators.hideRegisterForm;

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
    }
}

export default {
    showLoginForm,
    showRegisterForm,
    hideLoginForm,
    hideRegisterForm,
    login,
    register,
    logout
}
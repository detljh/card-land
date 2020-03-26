import Creators from './actions';
import axios from 'axios';
import setAuthToken from "../../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import gameTypes from '../../../../../constants/gameTypes';
<<<<<<< HEAD
import sActions from '../../../socket/actions';
import history from '../../../history';
=======
import wsActions from '../../../socket/actions';
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d

const hideLoginForm = Creators.hideLoginForm;
const hideRegisterForm = Creators.hideRegisterForm;
const setConnection = Creators.setConnection;
<<<<<<< HEAD
const updateUsersOnline = Creators.updateUsersOnline;
=======
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d

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
<<<<<<< HEAD
            dispatch(sActions.sAuth(decoded));
=======
            dispatch(wsActions.wsAuth(decoded));
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
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
<<<<<<< HEAD
        dispatch(sActions.sAuth({}));
    }
}

const getRoom = (type) => {
    return (dispatch) => {
        dispatch(sActions.sGetRoom(type));
    }   
}

const assignRoom = (room, type) => {
    return (dispatch) => {
        dispatch(Creators.assignRoom(room));
        dispatch(sActions.sJoinRoom(type));
        if (type === gameTypes.TIC_TAC_TOE) {
            history.push(`/tic_tac_toe/${room}`);
        }
    }
=======
        dispatch(wsActions.wsAuth({}));
    }
}

const startGame = (type, ownProps) => {
    return () => {
        if (type === gameTypes.TIC_TAC_TOE) {
            ownProps.history.push('/tic_tac_toe');
        }
    }   
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
}

export default {
    showLoginForm,
    showRegisterForm,
    hideLoginForm,
    hideRegisterForm,
    login,
    register,
    logout,
<<<<<<< HEAD
    getRoom,
    setConnection,
    updateUsersOnline,
    assignRoom
=======
    startGame,
    setConnection
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
}
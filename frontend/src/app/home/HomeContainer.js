import HomeComponent from './HomeComponent';
import { connect } from 'react-redux';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        displayLogin: state.home.ui.showLoginForm,
        displayRegister: state.home.ui.showRegisterForm,
        auth: state.home.auth,
<<<<<<< HEAD
        errors: state.home.errors,
        usersOnline: state.home.socket.online
    }
}

const mapDispatchToProps = (dispatch) => {
=======
        errors: state.home.errors
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
    return {
        showLoginForm: () => {
            dispatch(homeOperations.showLoginForm());
        },
        showRegisterForm: () => {
            dispatch(homeOperations.showRegisterForm());
        },
        hideLoginForm: () => {
            dispatch(homeOperations.hideLoginForm());
        },
        hideRegisterForm: () => {
            dispatch(homeOperations.hideRegisterForm());
        },
        login: (username, password) => {
            dispatch(homeOperations.login(username, password));
        },
        register: (username, password, confirmPassword) => {
            dispatch(homeOperations.register(username, password, confirmPassword));
        },
        logout: () => {
            dispatch(homeOperations.logout());
        },
<<<<<<< HEAD
        getRoom: (type) => {
            dispatch(homeOperations.getRoom(type));
=======
        startGame: (type) => {
            dispatch(homeOperations.startGame(type, ownProps));
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;
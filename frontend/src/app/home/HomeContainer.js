import HomeComponent from './HomeComponent';
import { connect } from 'react-redux';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        displayLogin: state.home.ui.showLoginForm,
        displayRegister: state.home.ui.showRegisterForm,
        auth: state.home.auth,
        errors: state.home.errors
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
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
        startGame: (type) => {
            dispatch(homeOperations.startGame(type, ownProps));
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;
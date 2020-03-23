import HomeComponent from './HomeComponent';
import { connect } from 'react-redux';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        displayLogin: state.home.auth.showLoginForm,
        displayRegister: state.home.auth.showRegisterForm
    }
}

const mapDispatchToProps = (dispatch) => {
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
        }
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;
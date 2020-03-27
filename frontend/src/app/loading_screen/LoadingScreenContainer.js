import { connect } from 'react-redux';
import LoadingScreenComponent from './LoadingScreenComponent';
import { loadingOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        connected: state.home.auth.connected,
        players: state.loading.players,
        countdown: state.loading.countdown,
        start: state.loading.start
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        join: () => {
            dispatch(loadingOperations.join());
        },
        leave: () => {
            dispatch(loadingOperations.leave());
        }
    }
}

const LoadingScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoadingScreenComponent);
export default LoadingScreenContainer;
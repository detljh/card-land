import { connect } from 'react-redux';
import TicTacToeComponent from './TicTacToeComponent';
import { ticOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        connected: state.home.auth.connected
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        join: () => {
            dispatch(ticOperations.join());
        },
        leave: () => {
            dispatch(ticOperations.leave());
        }
    }
}

const TicTacToeContainer = connect(mapStateToProps, mapDispatchToProps)(TicTacToeComponent);
export default TicTacToeContainer;
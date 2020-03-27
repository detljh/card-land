import { connect } from 'react-redux';
import TicTacToeComponent from './TicTacToeComponent';
import { ticOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        players: state.room.players,
        currentIcon: state.tic.game.currentIcon,
        finished: state.tic.game.finished,
        winner: state.tic.game.winner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(ticOperations.reset());
        }
    }
}

const TicTacToeContainer = connect(mapStateToProps, mapDispatchToProps)(TicTacToeComponent);
export default TicTacToeContainer;
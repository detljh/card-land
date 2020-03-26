import { connect } from 'react-redux';
import TicTacToeComponent from './TicTacToeComponent';
import { ticOperations } from './duck';

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        connected: state.home.auth.connected,
        players: state.tic.game.players,
        countdown: state.tic.game.countdown
=======
        connected: state.home.auth.connected
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
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
import { connect } from 'react-redux';
import TicTacToeComponent from './TicTacToeComponent';
import { ticOperations } from './duck';
import { roomOperations } from '../loading_room/duck';

const mapStateToProps = (state) => {
    return {
        players: state.room.room.players,
        finished: state.tic.game.finished,
        user: state.home.auth.user,
        opponent: state.room.room.opponent,
        resetRequestPrompt: state.room.ui.resetRequestPrompt,
        waitingResponsePrompt: state.room.ui.waitingResponsePrompt,
        isTurn: state.room.room.currentPlayerIndex !== null ? (state.room.room.players[state.room.room.currentPlayerIndex].name === state.home.auth.user.name) : false,
        endGameText: state.tic.game.winner ? state.tic.game.winner.name === state.home.auth.user.name ? 'You win!' : `${state.tic.game.winner.name} won!` : 'Draw!',
        declinePrompt: state.room.ui.declinePrompt,
        acceptPrompt: state.room.ui.acceptPrompt,
        countdown: state.room.room.countdown
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => {
            dispatch(roomOperations.reset());
        },
        leave: () => {
            dispatch(roomOperations.leave());
        },
        acceptReset: () => {
            dispatch(roomOperations.acceptReset());
        },
        declineReset: () => {
            dispatch(roomOperations.declineReset());
        }
    }
}

const TicTacToeContainer = connect(mapStateToProps, mapDispatchToProps)(TicTacToeComponent);
export default TicTacToeContainer;
import { connect } from 'react-redux';
import TicTacToeComponent from './TicTacToeComponent';
import { roomOperations } from '../loading_room/duck';

const mapStateToProps = (state) => {
    return {
        players: state.room.room.players,
        finished: state.tic.game.finished,
        user: state.home.auth.user,
        opponent: state.room.room.opponent,
        resetRequestPrompt: state.room.ui.resetRequestPrompt,
        waitingResponsePrompt: state.room.ui.waitingResponsePrompt,
        isTurn: state.room.room.players.length === 2 ? (state.room.room.players[state.room.room.currentPlayerIndex].username === state.home.auth.user.username) : false,
        endGameText: state.tic.game.winner ? state.tic.game.winner.username === state.home.auth.user.username ? 'You win!' : `${state.tic.game.winner.username} won!` : 'Draw!',
        declinePrompt: state.room.ui.declinePrompt,
        acceptPrompt: state.room.ui.acceptPrompt,
        countdown: state.room.room.countdown,
        currentIcon: state.tic.game.currentIcon,
        queued: state.home.socket.queued
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
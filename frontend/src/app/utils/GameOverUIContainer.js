import { connect } from 'react-redux';
import { roomOperations } from '../loading_room/duck';
import GameOverUIComponent from './GameOverUIComponent';

const mapStateToProps = (state) => {
    return {
        finished: state.tic.game.finished,
        opponent: state.room.room.opponent,
        resetRequestPrompt: state.room.ui.resetRequestPrompt,
        waitingResponsePrompt: state.room.ui.waitingResponsePrompt,
        endGameText: state.tic.game.winner ? state.tic.game.winner.username === state.home.auth.user.username ? 'You win!' : `${state.tic.game.winner.username} won!` : 'Draw!',
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
        acceptReset: () => {
            dispatch(roomOperations.acceptReset());
        },
        declineReset: () => {
            dispatch(roomOperations.declineReset());
        }
    }
}

const GameOverUIContainer = connect(mapStateToProps, mapDispatchToProps)(GameOverUIComponent);
export default GameOverUIContainer;
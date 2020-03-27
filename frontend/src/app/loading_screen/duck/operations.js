import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';
import history from '../../../history';

const updatePlayers = Creators.updatePlayers;

let timer = null;
const tick = (dispatch, getState) => {
    return setInterval(() => {
        let players = getState().tic.game.players;
        if (players.length !== 2) {
            clearInterval(timer);
            dispatch(Creators.countdown(true));
        } else {
            dispatch(Creators.countdown());
            let count = getState().tic.game.countdown;

            if (count === 0) {
                clearInterval(timer);
                dispatch(startGame());
            }
        }
    }, 1000);
}

const countdown = () => {
    return (dispatch, getState) => {
        if (timer) {
            clearInterval(timer);
        }
        timer = tick(dispatch, getState);
    }
}

const join = () => {
    return (dispatch, getState) => {
        let type = getState().home.auth.gameType;
        dispatch(sActions.sGetRoom(type));
    }
}

const leave = () => {
    return (dispatch) => {
        dispatch(sActions.sLeaveRoom());
    }
}

const startGame = () => {
    return (dispatch, getState) => {
        dispatch(Creators.startGame());
        let type = getState().home.socket.gameType;
        let room = getState().home.socket.room;

        switch (type) {
            case gameTypes.TIC_TAC_TOE:
                history.push(`/${room}/tic_tac_toe`);
                break;
            default:
                return;
        }
    }
}

export default {
    updatePlayers,
    join,
    leave,
    countdown
}
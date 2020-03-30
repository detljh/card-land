import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';
import history from '../../../history';

let timer = null;
const tick = (dispatch, getState) => {
    return setInterval(() => {
        let players = getState().room.players;
        if (players.length !== 2) {
            clearInterval(timer);
            dispatch(Creators.countdown(true));
        } else {
            dispatch(Creators.countdown());
            let count = getState().room.countdown;

            if (count === 0) {
                clearInterval(timer);
                let room = getState().home.socket.room;
                let type = getState().room.type;
                startGame({ room: room, type: type });
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

const leave = () => {
    return (dispatch) => {
        history.push('/');
        dispatch(sActions.sLeaveRoom());
    }
}

const updateRoomState = (room) => {
    return (dispatch, getState) => {
        if (room === null) {
            return;
        }
        let user = getState().home.auth.user.name;
        let opponent = room.started ? room.players.filter(player => player != user)[0] : null;

        let payload = {
            currentPlayerIndex: room.currentPlayerIndex,
            started: room.started,
            opponent: opponent,
            players: room.players,
            type: room.type
        }
        dispatch(Creators.updateRoomState(payload));
    }
}

const startGame = (payload) => {
    switch (payload.type) {
        case gameTypes.TIC_TAC_TOE:
            history.push(`/${payload.room}/tic_tac_toe`);
            break;
        default:
            return;
    }
}

export default {
    leave,
    countdown,
    updateRoomState
}
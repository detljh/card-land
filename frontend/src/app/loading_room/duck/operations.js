import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';
import history from '../../../history';
import { ticOperations } from '../../tic_tac_toe/duck';

const sendResetRequest = Creators.sendResetRequest;
const waitingResponse = Creators.waitingResponse;

let timer = null;
const tick = (dispatch, getState, cb) => {
    return setInterval(() => {
        let players = getState().room.room.players;
        if (players.length !== 2) {
            clearInterval(timer);
            dispatch(Creators.countdown(true));
        } else {
            dispatch(Creators.countdown());
            let count = getState().room.room.countdown;

            if (count === 0) {
                clearInterval(timer);
                return cb();
            }
        }
    }, 1000);
}

const countdown = (cb) => {
    return (dispatch, getState) => {
        if (timer) {
            dispatch(Creators.countdown(true));
            clearInterval(timer);
        }
        timer = tick(dispatch, getState, cb);
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

const updateGame = (data) => {
    return (dispatch, getState) => {
        let type = getState().room.room.type;
        switch (type) {
            case gameTypes.TIC_TAC_TOE:
                dispatch(ticOperations.setGameState(data.room));
                break;
            default:
                return;
        }
    }
}

const startGame = () => {
    return (dispatch, getState) => {
        let room = getState().home.socket.room;
        let type = getState().room.room.type;
        switch (type) {
            case gameTypes.TIC_TAC_TOE:
                history.push(`/${room}/tic_tac_toe`);
                break;
            default:
                return;
        }
    }
}

const reset = () => {
    return (dispatch) => {
        dispatch(sActions.sRequestReset());
    }
}

const acceptReset = () => {
    return (dispatch) => {
        dispatch(sActions.sAcceptReset());
    }
        
}

const declineReset = () => {
    return (dispatch) => {
        dispatch(sActions.sDeclineReset());
    }
}

const setDeclinePrompt = () => {
    return (dispatch) => {
        dispatch(Creators.setDeclinePrompt());
        dispatch(countdown(() => {
            dispatch(Creators.resetUI());
            history.push('/');
        }));
    }
}

const setAcceptPrompt = () => {
    return (dispatch, getState) => {
        dispatch(Creators.setAcceptPrompt());
        let type = getState().room.room.type;
        dispatch(countdown(() => {
            dispatch(Creators.resetUI());
            switch (type) {
                case gameTypes.TIC_TAC_TOE:
                    dispatch(ticOperations.reset());
                    break;
                default:
                    return;
            }
        }));
    }
}

export default {
    sendResetRequest,
    waitingResponse,
    setDeclinePrompt,
    setAcceptPrompt,
    leave,
    countdown,
    updateRoomState,
    updateGame,
    startGame,
    reset,
    acceptReset,
    declineReset
}
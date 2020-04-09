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

const resetAll = (gameType) => {
    return (dispatch) => {
        dispatch(Creators.resetUI());
        switch (gameType) {
            case gameTypes.TIC_TAC_TOE:
                dispatch(ticOperations.reset());
                break;
            default:
                return;
        }
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
        if (!room) {
            dispatch(Creators.resetRoom());
            return;
        }
        let user = getState().home.auth.user.username;
        let opponent = room.ready ? room.players.filter(player => player.username != user)[0] : null;
        let payload = {
            roomId: getState().home.socket.room,
            currentPlayerIndex: room.currentPlayerIndex,
            started: room.started,
            ready: room.ready,
            opponent: opponent,
            players: room.players,
            gameType: room.gameType
        }
        dispatch(Creators.updateRoomState(payload));
    }
}

const updateGame = (data) => {
    return (dispatch, getState) => {
        if (!data.state) {
            dispatch(resetAll(data.gameType));
            return;
        }

        let gameType = getState().room.room.gameType;
        switch (gameType) {
            case gameTypes.TIC_TAC_TOE:
                dispatch(ticOperations.setGameState(data.state));
                break;
            default:
                return;
        }
    }
}

const startGame = () => {
    return (dispatch, getState) => {
        let room = getState().home.socket.room;
        let gameType = getState().room.room.gameType;
        dispatch(Creators.startRoom());
        dispatch(sActions.sStartGame(room));
        switch (gameType) {
            case gameTypes.TIC_TAC_TOE:
                history.push(`/${room}/tic_tac_toe`);
                break;
            default:
                return;
        }
    }
}

const reset = () => {
    return (dispatch, getState) => {
        let roomId = getState().home.socket.room;
        dispatch(sActions.sRequestReset({ roomId: roomId }));
    }
}

const acceptReset = () => {
    return (dispatch, getState) => {
        let roomId = getState().home.socket.room;
        dispatch(sActions.sAcceptReset({ roomId: roomId }));
    }
        
}

const declineReset = () => {
    return (dispatch, getState) => {
        let roomId = getState().home.socket.room;
        dispatch(sActions.sDeclineReset({ roomId: roomId }));
    }
}

const setDeclinePrompt = () => {
    return (dispatch, getState) => {
        let roomId = getState().home.socket.room;
        dispatch(Creators.setDeclinePrompt({ roomId: roomId }));
    }
}

const setAcceptPrompt = () => {
    return (dispatch, getState) => {
        dispatch(Creators.setAcceptPrompt());
        let gameType = getState().room.room.gameType;
        dispatch(countdown(() => {
            dispatch(resetAll(gameType));
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
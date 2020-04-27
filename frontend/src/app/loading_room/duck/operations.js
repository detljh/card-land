import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';
import history from '../../../history';
import { ticOperations } from '../../tic_tac_toe/duck';
import { homeOperations } from '../../home/duck';
import { bsOperations } from '../../battleships/duck';

const sendResetRequest = Creators.sendResetRequest;
const waitingResponse = Creators.waitingResponse;
const displayAlert = Creators.displayAlert;

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
            case gameTypes.BATTLESHIPS:
                dispatch(bsOperations.reset());
                break;
            default:
                return;
        }
    }
}

const leave = () => {
    return (dispatch) => {
        history.push('/');
        dispatch(homeOperations.setQueue(false));
        dispatch(sActions.sLeaveRoom());
    }
}

const updateRoomState = (room) => {
    return (dispatch, getState) => {
        if (!room || !getState().home.socket.queued) {
            dispatch(Creators.resetRoom());
            return;
        }

        let user = getState().home.auth.user.username;
        let opponent = room.ready ? room.players.filter(player => player.username != user)[0] : null;
        let payload = {
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
            case gameTypes.BATTLESHIPS:
                dispatch(bsOperations.setGameState(data.state));
                break;
            default:
                return;
        }
    }
}

const startGame = () => {
    return (dispatch, getState) => {
        let gameType = getState().room.room.gameType;
        dispatch(Creators.startRoom());
        dispatch(sActions.sStartGame());
        setTimeout(() => {
            switch (gameType) {
                case gameTypes.TIC_TAC_TOE:
                    history.push(`/${gameTypes.TIC_TAC_TOE}`);
                    break;
                case gameTypes.BATTLESHIPS:
                    history.push(`/${gameTypes.BATTLESHIPS}`);
                    break;
                default:
                    return;
            }
        }, 250);
        
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
    declineReset,
    displayAlert
}
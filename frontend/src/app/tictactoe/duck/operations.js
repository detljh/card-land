import Creators from './actions';
import sActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';

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
                console.log('start');
                clearInterval(timer);
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
    return (dispatch) => {
        dispatch(sActions.sGetRoom(gameTypes.TIC_TAC_TOE));
    }
}

const leave = () => {
    return (dispatch) => {
        dispatch(sActions.sLeaveRoom());
    }
}

export default {
    updatePlayers,
    join,
    leave,
    countdown
}
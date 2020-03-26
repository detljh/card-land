import Creators from './actions';
<<<<<<< HEAD
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
=======
import wsActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';

const join = () => {
    return (dispatch) => {
        dispatch(wsActions.wsJoinRoom(gameTypes.TIC_TAC_TOE));
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
    }
}

const leave = () => {
    return (dispatch) => {
<<<<<<< HEAD
        dispatch(sActions.sLeaveRoom());
=======
        dispatch(wsActions.wsLeaveRoom());
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
    }
}

export default {
<<<<<<< HEAD
    updatePlayers,
    join,
    leave,
    countdown
=======
    join,
    leave
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
}
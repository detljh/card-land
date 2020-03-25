import Creators from './actions';
import wsActions from '../../../socket/actions';
import gameTypes from '../../../../../constants/gameTypes';

const join = () => {
    return (dispatch) => {
        dispatch(wsActions.wsJoinRoom(gameTypes.TIC_TAC_TOE));
    }
}

const leave = () => {
    return (dispatch) => {
        dispatch(wsActions.wsLeaveRoom());
    }
}

export default {
    join,
    leave
}
import Creators from './actions';
import sActions from '../../../socket/actions';

const setGameState = Creators.setGameState;
const reset = Creators.reset;

const takeTurn = () => {
    return (dispatch, getState) => {
        let finished = getState().tic.game.finished;
        if (finished) {
            return;
        }
       
        let status = checkStatus();
       
        let payload = {
        }

        if (status.end) {
            dispatch(sActions.sUpdateGameState(payload));
            dispatch(sActions.sEndGame(status));
        } else {
            dispatch(sActions.sUpdateGameState(payload));
            dispatch(sActions.sEndTurn());
        }
    }
}

const checkStatus = () => {
    
    return { end: false, winner: null };
}

export default {
    setGameState,
    takeTurn,
    reset
}
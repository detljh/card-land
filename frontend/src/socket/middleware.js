import actions from './actions';
import types from './types';
import io from 'socket.io-client';
import events from '../../../constants/socketEvents'; 
import { homeOperations } from '../app/home/duck';

const socketMiddleware = () => {
    let socket = null;

    return store => next => action => {
        switch(action.type) {
            case types.WS_CONNECT:
                if (socket != null) {
                    socket.close();
                }

                socket = io(action.host);
                store.dispatch(homeOperations.setConnection(true));
                socket.emit(events.USER_AUTH, action.user);
                break;
            case types.WS_AUTH:
                socket.emit(events.USER_AUTH, action.user);
                break;
            case types.WS_JOIN_ROOM:
                socket.emit(events.START_GAME, action.gameType);
                break;
            case types.WS_LEAVE_ROOM:
                socket.emit(events.LEAVE_ROOM);
                break;
            default:
                return next(action);
        }
    }
}

export default socketMiddleware();
import actions from './actions';
import types from './types';
import io from 'socket.io-client';
import events from '../../../constants/socketEvents'; 
import { homeOperations } from '../app/home/duck';
<<<<<<< HEAD
import { ticOperations } from '../app/tictactoe/duck';
=======
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d

const socketMiddleware = () => {
    let socket = null;

<<<<<<< HEAD
    
    return store => next => {
        const listeners = (socket) => {
            socket.on(events.USERS_ONLINE, (data) => {
                store.dispatch(homeOperations.updateUsersOnline(data.online));
            });
    
            socket.on(events.ASSIGN_ROOM, (data) => {
                store.dispatch(homeOperations.assignRoom(data.room, data.gameType))
            });
    
            socket.on(events.LOAD_PLAYERS, (data) => {
                store.dispatch(ticOperations.updatePlayers(data.players));
            });
    
            socket.on(events.READY, () => {
               store.dispatch(ticOperations.countdown()); 
            });
        }
        
        return action => {
            switch(action.type) {
                case types.S_CONNECT:
                    if (socket != null) {
                        socket.close();
                    }

                    socket = io(action.host);
                    store.dispatch(homeOperations.setConnection(true));
                    socket.emit(events.USER_AUTH, action.user);

                    listeners(socket);
                    break;
                case types.S_AUTH:
                    socket.emit(events.USER_AUTH, action.user);
                    break;
                case types.S_JOIN_ROOM:
                    socket.emit(events.JOIN_ROOM, action.gameType);
                    break;
                case types.S_LEAVE_ROOM:
                    socket.emit(events.LEAVE_ROOM);
                    break;
                case types.S_GET_ROOM:
                    socket.emit(events.GET_ROOM, action.gameType);
                default:
                    return next(action);
            }
=======
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
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        }
    }
}

export default socketMiddleware();
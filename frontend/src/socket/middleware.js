import actions from './actions';
import types from './types';
import io from 'socket.io-client';
import events from '../../../constants/socketEvents'; 
import { homeOperations } from '../app/home/duck';
import { roomOperations } from '../app/loading_room/duck';

const socketMiddleware = () => {
    let socket = null;

    return store => next => {
        const listeners = (socket) => {
            socket.on(events.USERS_ONLINE, (data) => {
                store.dispatch(homeOperations.updateUsersOnline(data.online));
            });
            
            socket.on(events.SET_GUEST_ID, (data) => {
                store.dispatch(homeOperations.setGuestId(data.username));
            });

            socket.on(events.ASSIGN_ROOM, (data) => {
                store.dispatch(homeOperations.assignRoom(data.roomId));
            });
    
            socket.on(events.LOAD_PLAYERS, (data) => {
                store.dispatch(roomOperations.setOpponent(data.opponent));
            });

            socket.on(events.UPDATE_ROOM_STATE, (data) => {
                store.dispatch(roomOperations.updateRoomState(data.room));
                store.dispatch(homeOperations.updateRoom(data.room));
            })
    
            socket.on(events.READY, () => {
                store.dispatch(roomOperations.countdown()); 
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
                    socket.emit(events.JOIN_ROOM, { roomId: action.roomId });
                    break;
                case types.S_LEAVE_ROOM:
                    socket.emit(events.LEAVE_ROOM);
                    break;
                case types.S_GET_ROOM:
                    socket.emit(events.GET_ROOM, action.gameType);
                case types.S_START_GAME:
                    socket.emit(events.START_GAME);
                    break;
                default:
                    return next(action);
            }
        }
    }
}

export default socketMiddleware();
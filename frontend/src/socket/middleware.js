import gameTypes from '../../../constants/gameTypes';
import types from '../../../constants/clientEvents';
import io from 'socket.io-client';
import events from '../../../constants/serverEvents'; 
import { homeOperations } from '../app/home/duck';
import { roomOperations } from '../app/loading_room/duck';
import { ticOperations } from '../app/tic_tac_toe/duck';

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

            socket.on(events.UPDATE_ROOM_STATE, (data) => {
                store.dispatch(roomOperations.updateRoomState(data.room));
            });

            socket.on(events.UPDATE_GAME, (data) => {
                store.dispatch(roomOperations.updateGame(data));
            })
    
            socket.on(events.READY, () => {
                store.dispatch(roomOperations.countdown(() => {
                    store.dispatch(roomOperations.startGame());
                })); 
            });

            socket.on(events.SEND_RESET_REQUEST, () => {
                store.dispatch(roomOperations.sendResetRequest());
            });

            socket.on(events.WAITING_RESPONSE, () => {
                store.dispatch(roomOperations.waitingResponse());
            });

            socket.on(events.DECLINED_RESET, () => {
                store.dispatch(roomOperations.setDeclinePrompt());
            });

            socket.on(events.ACCEPTED_RESET, () => {
                store.dispatch(roomOperations.setAcceptPrompt());
            });
        }
        
        return action => {
            switch(action.type) {
                case types.CONNECT:
                    if (socket != null) {
                        socket.close();
                    }

                    socket = io(action.host);
                    store.dispatch(homeOperations.setConnection(true));
                    socket.emit(types.AUTH, action.user);

                    listeners(socket);
                    break;
                case types.AUTH:
                    socket.emit(action.type, action.user);
                    break;
                case types.JOIN_ROOM:
                    socket.emit(action.type, { roomId: action.roomId });
                    break;
                case types.UPDATE_GAME_STATE:
                case types.END_GAME:
                    socket.emit(action.type, action.payload);
                    break;
                case types.GET_ROOM:
                    socket.emit(action.type, action.gameType);
                    break;
                case types.LEAVE_ROOM:
                case types.START_GAME:
                case types.END_TURN:
                case types.REQUEST_RESET:
                case types.DECLINE_RESET:
                case types.ACCEPT_RESET:
                    socket.emit(action.type);
                    break;
                default:
                    return next(action);
            }
        }
    }
}

export default socketMiddleware();
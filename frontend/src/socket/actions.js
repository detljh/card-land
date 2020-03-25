import types from './types';

const wsConnect = (host, user) => {
    return {
        type: types.WS_CONNECT,
        host: host,
        user: user
    }
}

const wsAuth = (user) => {
    return {
        type: types.WS_AUTH,
        user: user
    }
}

const wsJoinRoom = (gameType) => {
    return {
        type: types.WS_JOIN_ROOM,
        gameType: gameType
    }
}

const wsLeaveRoom = () => {
    return {
        type: types.WS_LEAVE_ROOM
    }
}
export default {
    wsConnect,
    wsAuth,
    wsJoinRoom,
    wsLeaveRoom
}
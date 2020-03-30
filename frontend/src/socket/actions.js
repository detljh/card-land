import types from './types';

const sConnect = (host, user) => {
    return {
        type: types.S_CONNECT,
        host: host,
        user: user
    }
}

const sAuth = (user) => {
    return {
        type: types.S_AUTH,
        user: user
    }
}

const sJoinRoom = (roomId) => {
    return {
        type: types.S_JOIN_ROOM,
        roomId: roomId
    }
}

const sLeaveRoom = () => {
    return {
        type: types.S_LEAVE_ROOM
    }
}

const sGetRoom = (gameType) => {
    return {
        type: types.S_GET_ROOM,
        gameType: gameType
    }
}

const sStartGame = () => {
    return {
        type: types.S_START_GAME
    }
}

export default {
    sConnect,
    sAuth,
    sJoinRoom,
    sLeaveRoom,
    sGetRoom,
    sStartGame
}
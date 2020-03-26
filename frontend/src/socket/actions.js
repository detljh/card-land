import types from './types';

<<<<<<< HEAD
const sConnect = (host, user) => {
    return {
        type: types.S_CONNECT,
=======
const wsConnect = (host, user) => {
    return {
        type: types.WS_CONNECT,
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        host: host,
        user: user
    }
}

<<<<<<< HEAD
const sAuth = (user) => {
    return {
        type: types.S_AUTH,
=======
const wsAuth = (user) => {
    return {
        type: types.WS_AUTH,
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        user: user
    }
}

<<<<<<< HEAD
const sJoinRoom = (gameType) => {
    return {
        type: types.S_JOIN_ROOM,
=======
const wsJoinRoom = (gameType) => {
    return {
        type: types.WS_JOIN_ROOM,
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
        gameType: gameType
    }
}

<<<<<<< HEAD
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

export default {
    sConnect,
    sAuth,
    sJoinRoom,
    sLeaveRoom,
    sGetRoom
=======
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
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
}
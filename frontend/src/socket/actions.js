import clientEvents from '../../../constants/clientEvents';

const sConnect = (host, user) => {
    return {
        type: clientEvents.CONNECT,
        host: host,
        user: user
    }
}

const sAuth = (user) => {
    return {
        type: clientEvents.AUTH,
        user: user
    }
}

const sJoinRoom = (roomId) => {
    return {
        type: clientEvents.JOIN_ROOM,
        roomId: roomId
    }
}

const sLeaveRoom = () => {
    return {
        type: clientEvents.LEAVE_ROOM
    }
}

const sGetRoom = (gameType) => {
    return {
        type: clientEvents.GET_ROOM,
        gameType: gameType
    }
}

const sStartGame = () => {
    return {
        type: clientEvents.START_GAME
    }
}

const sEndTurn = () => {
    return {
        type: clientEvents.END_TURN
    }
}

const sUpdateGameState = (payload) => {
    return {
        type: clientEvents.UPDATE_GAME_STATE,
        payload
    }
}

export default {
    sConnect,
    sAuth,
    sJoinRoom,
    sLeaveRoom,
    sGetRoom,
    sStartGame,
    sEndTurn,
    sUpdateGameState
}
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

const sStartGame = (roomId) => {
    return {
        type: clientEvents.START_GAME,
        roomId: roomId
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

const sEndGame = (payload) => {
    return {
        type: clientEvents.END_GAME,
        payload
    }
}

const sRequestReset = () => {
    return {
        type: clientEvents.REQUEST_RESET
    }
}

const sDeclineReset = () => {
    return {
        type: clientEvents.DECLINE_RESET
    }
}

const sAcceptReset = () => {
    return {
        type: clientEvents.ACCEPT_RESET
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
    sUpdateGameState,
    sEndGame,
    sRequestReset,
    sDeclineReset,
    sAcceptReset
}
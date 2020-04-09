import clientEvents from '../../../constants/clientEvents';

const sConnect = (user) => {
    return {
        type: clientEvents.CONNECT,
        user: user
    }
}

const sAuth = (user) => {
    return {
        type: clientEvents.AUTH,
        user: user
    }
}

const sJoinRoom = (payload) => {
    return {
        type: clientEvents.JOIN_ROOM,
        payload
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

const sEndTurn = (payload) => {
    return {
        type: clientEvents.END_TURN,
        payload
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

const sRequestReset = (payload) => {
    return {
        type: clientEvents.REQUEST_RESET,
        payload
    }
}

const sDeclineReset = (payload) => {
    return {
        type: clientEvents.DECLINE_RESET,
        payload
    }
}

const sAcceptReset = (payload) => {
    return {
        type: clientEvents.ACCEPT_RESET,
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
    sUpdateGameState,
    sEndGame,
    sRequestReset,
    sDeclineReset,
    sAcceptReset
}
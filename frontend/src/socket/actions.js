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

const sLeaveRoom = () => {
    return {
        type: clientEvents.LEAVE_ROOM
    }
}

const sJoinQueue = (payload) => {
    return {
        type: clientEvents.JOIN_QUEUE,
        payload
    }
}

const sStartGame = () => {
    return {
        type: clientEvents.START_GAME,
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
    sLeaveRoom,
    sJoinQueue,
    sStartGame,
    sEndTurn,
    sUpdateGameState,
    sEndGame,
    sRequestReset,
    sDeclineReset,
    sAcceptReset
}
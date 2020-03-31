import types from "./types"

const countdown = (reset) => {
    return {
        type: types.COUNTDOWN,
        reset: reset
    }
}

const endTurn = () => {
    return {
        type: types.END_TURN,
    }
}

const updateRoomState = (payload) => {
    return {
        type: types.UPDATE_ROOM_STATE,
        payload: payload
    }
}

const startGame = (currentPlayerIndex) => {
    return {
        type: types.START_GAME,
        currentPlayerIndex: currentPlayerIndex
    }
}

const sendResetRequest = () => {
    return {
        type: types.RESET_REQUEST_PROMPT
    }
}

const waitingResponse = () => {
    return {
        type: types.WAITING_RESPONSE_PROMPT
    }
}

const setDeclinePrompt = () => {
    return {
        type: types.DECLINE_PROMPT
    }
}

const setAcceptPrompt = () => {
    return {
        type: types.ACCEPT_PROMPT
    }
}

const resetUI = () => {
    return {
        type: types.RESET_UI
    }
}

export default {
    countdown,
    endTurn,
    updateRoomState,
    startGame,
    sendResetRequest,
    waitingResponse,
    setDeclinePrompt,
    setAcceptPrompt,
    resetUI
}
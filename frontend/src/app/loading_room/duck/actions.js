import types from "./types"

const countdown = (reset) => {
    return {
        type: types.COUNTDOWN,
        reset: reset
    }
}

const updateRoomState = (payload) => {
    return {
        type: types.UPDATE_ROOM_STATE,
        payload
    }
}

const resetRoom = () => {
    return {
        type: types.RESET_ROOM
    }
}

const startRoom = () => {
    return {
        type: types.START_ROOM
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

const displayAlert = (value, alert) => {
    return {
        type: types.DISPLAY_ALERT,
        value: value,
        alert: alert
    }
}

export default {
    countdown,
    updateRoomState,
    resetRoom,
    startRoom,
    sendResetRequest,
    waitingResponse,
    setDeclinePrompt,
    setAcceptPrompt,
    resetUI,
    displayAlert
}
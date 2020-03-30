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

export default {
    countdown,
    endTurn,
    updateRoomState,
    startGame
}
import types from "./types"

const takeTurn = (squares, currentIcon) => {
    return {
        type: types.TAKE_TURN,
        squares: squares,
        currentIcon: currentIcon
    }
}

const reset = () => {
    return {
        type: types.RESET
    }
}

const setGameState = (payload) => {
    return {
        type: types.SET_GAME_STATE,
        payload
    }
}

export default {
    takeTurn,
    reset,
    setGameState
}
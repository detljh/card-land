import types from "./types"

const updatePlayers = (players) => {
    return {
        type: types.UPDATE_PLAYERS,
        players: players
    }
}

const countdown = (reset) => {
    return {
        type: types.COUNTDOWN,
        reset: reset
    }
}

const startGame = () => {
    return {
        type: types.START_GAME
    }
}

export default {
    updatePlayers,
    countdown,
    startGame
}
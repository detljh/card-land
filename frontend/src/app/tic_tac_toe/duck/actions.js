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

export default {
    updatePlayers,
    countdown
}
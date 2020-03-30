import types from "./types"

const updatePlayers = (players) => {
    return {
        type: types.UPDATE_PLAYERS,
        players: players
    }
}

const setOpponent = (opponent) => {
    return {
        type: types.SET_OPPONENT,
        opponent: opponent
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
    setOpponent,
    countdown,
    startGame
}
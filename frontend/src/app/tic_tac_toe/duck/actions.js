import types from "./types"

const updatePlayers = (players) => {
    return {
        type: types.UPDATE_PLAYERS,
        players: players
    }
}

const takeTurn = (squares, currentPlayer) => {
    return {
        type: types.TAKE_TURN,
        squares: squares,
        currentPlayer
    }
}

const win = (winner) => {
    return {
        type: types.WIN,
        winner: winner
    }
}

const draw = () => {
    return {
        type: types.DRAW
    }
}

export default {
    updatePlayers,
    takeTurn,
    win,
    draw
}
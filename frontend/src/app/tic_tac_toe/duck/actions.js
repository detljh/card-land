import types from "./types"

const takeTurn = (squares, currentIcon) => {
    return {
        type: types.TAKE_TURN,
        squares: squares,
        currentIcon: currentIcon
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

const reset = () => {
    return {
        type: types.RESET
    }
}

export default {
    takeTurn,
    win,
    draw,
    reset
}
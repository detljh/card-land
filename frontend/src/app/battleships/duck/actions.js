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

const selectShip = (id) => {
    return {
        type: types.SELECT_SHIP,
        id: id
    }
}

const setHoverSquares = (hoverSquares, isValidHover) => {
    return {
        type: types.SET_SHIP_HOVER_SQUARES,
        hoverSquares: hoverSquares,
        isValidHover: isValidHover
    }
}

const rotateShip = () => {
    return {
        type: types.ROTATE_SHIP
    }
}

export default {
    takeTurn,
    reset,
    setGameState,
    selectShip,
    setHoverSquares,
    rotateShip
}
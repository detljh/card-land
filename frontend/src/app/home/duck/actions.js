import types from "./types"

const showLoginForm = () => {
    return {
        type: types.SHOW_LOGIN_FORM
    }
}

const showRegisterForm = () => {
    return {
        type: types.SHOW_REGISTER_FORM
    }
}

const hideLoginForm = () => {
    return {
        type: types.HIDE_LOGIN_FORM
    }
}

const hideRegisterForm = () => {
    return {
        type: types.HIDE_REGISTER_FORM
    }
}

const setCurrentUser = (user, isAuthenticated) => {
    return {
        type: types.SET_CURRENT_USER,
        user: user,
        isAuthenticated: isAuthenticated
    }
}

const errors = (errors) => {
    return {
        type: types.GET_ERRORS,
        errors: errors
    }
}

const setConnection = (connected) => {
    return {
        type: types.SET_CONNECTION,
        connected: connected
    }
}

const updateUsersOnline = (online) => {
    return {
        type: types.UPDATE_ONLINE_USERS,
        online: online
    }
}

const assignRoom = (room, type) => {
    return {
        type: types.ASSIGN_ROOM,
        room: room,
        gameType: type
    }
}

export default {
    showLoginForm,
    showRegisterForm,
    hideLoginForm,
    hideRegisterForm,
    setCurrentUser,
    errors,
    setConnection,
    updateUsersOnline,
    assignRoom
}
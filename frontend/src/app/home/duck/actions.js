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

<<<<<<< HEAD
const updateUsersOnline = (online) => {
    return {
        type: types.UPDATE_ONLINE_USERS,
        online: online
    }
}

const assignRoom = (room) => {
    return {
        type: types.ASSIGN_ROOM,
        room: room
    }
}

=======
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
export default {
    showLoginForm,
    showRegisterForm,
    hideLoginForm,
    hideRegisterForm,
    setCurrentUser,
    errors,
<<<<<<< HEAD
    setConnection,
    updateUsersOnline,
    assignRoom
=======
    setConnection
>>>>>>> 8224622607e852a412880a04b41a84fb3393e17d
}
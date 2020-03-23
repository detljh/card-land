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

export default {
    showLoginForm,
    showRegisterForm,
    hideLoginForm,
    hideRegisterForm
}
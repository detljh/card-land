module.exports = validateRegisterInput = (data) => {
    let errors = {};

    if (!data.username) {
        errors.username = "Username field is required";
    }

    if (!data.password) {
        errors.password = "Password field is required";
    } 

    if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm password field is required";
    }

    if (data.password !== data.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
    }

    return errors;
}
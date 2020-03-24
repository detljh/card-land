module.exports = validateLoginInput = (data) => {
    let errors = {};

    if (!data.username) {
        errors.username = "Username field is required";
    }

    if (!data.password) {
        errors.password = "Password field is required";
    } 

    return errors;
}
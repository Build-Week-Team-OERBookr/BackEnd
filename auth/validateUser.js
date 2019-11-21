module.exports = (user, path) => {
    const errors = [];

    if (!user.username || user.username.length < 3) {
        errors.push('A username must be 4 or more characters long.')
    }

    if (!user.password || user.password.length < 3) {
        errors.push('A password must be 5 or more characters long.')
    }
 
    if (path === "/registration") {
        // Any input values specific to registration go here
    }

    return { 
        isSuccessful: !Boolean(errors.length),
        errors
    }
};
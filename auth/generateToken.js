const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets-config");

module.exports = user => {
    const payload = {
        id: user.id,
        username: user.username,
        password: user.password,
    };
  
    const options = { expiresIn: '1d' };

    return jwt.sign(payload, jwtSecret, options);
}; 
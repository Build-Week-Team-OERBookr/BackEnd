const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../config/secrets-config");

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "That authentication token provided is not valid" })
            } else {
                req.user = decodedToken;
                next();
            };
        });
    } else {
        res.status(401).json({ message: "This endpoint requires an authentication token, you shall not pass!." })
    };
};


// module.exports = (req, res, next) => {
//     const token = req.headers.authorization
  
//     if(token){
//       jwt.verify(token, jwtSecret, (err, decodedToken) => {
//         if(err){
//           res.status(401).json({ message: 'you shall not pass!' });
//         } else {
//           req.user = {
//             username: decodedToken.username
//           };
//           next()
//         }
//       })
//     }};
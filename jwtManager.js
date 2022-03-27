const jwt = require('jsonwebtoken');

const generateJwtToken = function  (user) {
    return jwt.sign({user}, process.env.TOKEN_SECRET, {expiresIn: '30s'});
}

const verifyToken = function (req, res, next) {

    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader != 'undefined') {

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        next();

    } else {
        res.sendStatus(403);
    }
}

module.exports = {
    verifyToken,
    generateJwtToken
}
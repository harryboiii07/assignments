const  jwt  = require("jsonwebtoken");
const {jwtpass } = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwttoken = words[1];
    const decodedval = jwt.verify(jwttoken,jwtpass);
    if (decodedval.username){
        req.username = decodedval.username;
        next()
    }
    else{
        res.status(403).json({
            msg : "invalid username or pass",
        });
    }
}

module.exports = userMiddleware;
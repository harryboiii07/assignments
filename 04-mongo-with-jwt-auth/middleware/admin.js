const  jwt  = require("jsonwebtoken");
const { jwtpass } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    console.log("hi there1");
    const token = req.headers.authorization;
    console.log(token);
    const words = token.split(" ");
    const jwttoken = words[1];
    
    try{
        const decodedval = jwt.verify(jwttoken,jwtpass);
        if (decodedval.username){
            next()
        }
        else{
            res.status(403).json({
                msg : "invalid username or pass",
            });
        }
    }
    catch(e){
        res.status(403).json({
            msg : "invalid username or pass",
        });
    }
    

}

module.exports = adminMiddleware;
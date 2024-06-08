const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const exists = await Admin.findOne({
        username : username,
        password : password,
    })
    if (exists){
        next()
    }
    else{
        res.status(403).send({
            msg : "invalid username or password",
        });
    }
}

module.exports = adminMiddleware;
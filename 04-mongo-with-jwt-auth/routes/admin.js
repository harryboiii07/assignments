const { Router } = require("express");
const { Admin,Course }  = require("../db");
const  jwt  = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const  { jwtpass }  = require("../config");
const router = Router();
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username : username,
        password : password,
    });
    res.json({
        msg : "admin created successfully"
    });

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const exists = await Admin.find({
        username : username,
        password : password
    });
    
    if(exists){
        const token = jwt.sign({
            username : username
        },jwtpass);
        res.json({
            token : token
        });
    }
    else{
        res.status(405).send({
            msg : "invalid username or password"
        });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imagelink = req.body.imagelink;

    const newcourse = await Course.create({
        title : title,
        description : description,
        imagelink : imagelink,
        price : price,
    })

    res.json({
        msg : "Course created successfully",
        courseId : newcourse._id,
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allcourses = await Course.find({});
    res.json({
        courses : allcourses
    });
});

module.exports = router;
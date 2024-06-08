const { Router } = require("express");
const jwt  = require("jsonwebtoken");
const { jwtpass } = require("../config")
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username : username,
        password : password,
    });
    res.json({
        msg : "user created successfully"
    });
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exists = await User.findOne({
        username : username,
        password : password,
    })
    if(exists){
        const token = jwt.sign({
            username : username
        },jwtpass);
        res.json({
            token : token
        });
    }
    else{
        res.status(405).json({
            msg : "invalid username or pass"
        });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allcourses = await Course.find({});
    res.json({
        courses : allcourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseid = req.params.courseId;
    const username = req.username;
    await User.updateOne({
        username : username
    },
    {
        "$push" : 
        {purchasedcourses : courseid}
    })
    res.json({
        msg : "purchase complete !"
    });
});

router.get('/purchasedCourses',userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({
        username : username
    });
    const courses = await Course.find({
        _id : 
        {"$in" : user.purchasedcourses}
    })
    res.json({
        courses : courses,
    });
});

module.exports = router
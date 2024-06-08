const { User , Course } = require("../db")
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

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
    msg : "User created successfully"
    });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    // { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
    const allcourses = await Course.find({});
    res.json({
        courses : allcourses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseid = req.params.courseId;
    const username = req.headers.username;
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

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username : username
    });
    const courses = await Course.find({
        _id : 
        {"$in" : user.purchasedcourses}
    })
});

module.exports = router
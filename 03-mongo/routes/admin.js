const { Admin , Course } = require("../db");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username : username,
        password : password,
    })
    res.json({
    msg : "Admin created successfully"
    });
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
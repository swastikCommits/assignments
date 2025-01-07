const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password= req.body.password;

    await User.Create({
        username,
        password
    });


    res.json({
        msg: "User created succesfully."
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response= await Course.find({});

    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const id=req.params.courseId;
    const username= req.headers.username

    await User.uppdateOne({
        username
    },{
        "$push": {
            purchasedCourses: courseId
        } 
    });

    res.json({
        msg: "Course purchased successfully."
    })
    

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const response= await User.find({});

    res.json(response)
});

module.exports = router
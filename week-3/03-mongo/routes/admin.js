const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;

    await Admin.Create({
        username,
        password
    });

    res.json({
        msg: "Admin created successfully."
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic


    const title= req.body.title;
    const description= req.body.description;
    const proce= req.body.price;
    const imageLink= req.body.imageLink;

    await Course.Create({
        tile,
        description,
        price,
        imageLink
    })

    res.status(200).json({
        msg: 'Course created succesfully', courseId: Course._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response= await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;
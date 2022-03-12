const express = require("express");
const editorialsModel = require("../model/editorials");
const videosModel = require("../model/videos");

let router = express.Router();

router.get("/trending", async (req, res, next) => {
    try {
        let editorials = await editorialsModel.find({});
        console.log(editorials)

        let videos = await videosModel.find({});

        let featured = [];
        if (editorials.length > 0) {
            featured = editorials.filter((item) => item.featured === true);
        }
        return res.status(200).json({
            status: true,
            videos: videos,
            editorials: editorials,
            featured: featured
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'An Unexpected error occured',
            error: error
        })
    }
});

module.exports = router;

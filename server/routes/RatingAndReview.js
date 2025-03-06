const express = require("express");
const { auth, isUser } = require("../middlewares/auth");
const { createReview, getReview, getAllReviews } = require("../controllers/RatingAndReview");
const router = express.Router();


// routes for creating review 
router.post("/createReview",auth,isUser,createReview);

// routes for getting review by book
router.get("/getReview",getReview);

// routes for getting all review 
router.get("/getAllReview",getAllReviews)

module.exports = router;
const express = require("express");
const { signup, login } = require("../controllers/Auth");
const { getUser, updateUserProfile } = require("../controllers/User");
const { auth } = require("../middlewares/auth");
const router = express.Router();


// routes for signup
router.post("/signup",signup);


// routes for login
router.post("/login",login);

// routes for getting user profile 
router.get("/userProfile",auth,getUser)

// routes for updating the user profile 
router.put("/updateUserProfile",auth,updateUserProfile);

module.exports = router;
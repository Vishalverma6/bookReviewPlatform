const express = require("express");
const { auth, isAdmin } = require("../middlewares/auth");
const { addBook, getAllBook, getBook, getSearchBook } = require("../controllers/Book");

const router = express.Router();

// routes for adding new book
router.post("/addBook",auth,isAdmin,addBook);

// routes for get All book
router.get("/getAllBook",getAllBook);

// routes for getting book by id 
router.get("/getBook/:bookId",getBook);

// search book
router.get("/searchBook",getSearchBook);



module.exports = router;
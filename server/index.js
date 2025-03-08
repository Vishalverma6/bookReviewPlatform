const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;


const userRoutes = require('./routes/User');
const bookRoutes = require('./routes/Book');
const ratingRoutes = require("./routes/RatingAndReview");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require('cors');



// database connection
database.connect();

// middlewares
app.use(express.json());
app.use(cookieParser());


app.use(
    cors({
        origin:"http://localhost:5173",
        // http://localhost:5173
        credentials:true,
    })
)

// routes 
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/book",bookRoutes);
app.use("/api/v1/ratingAndReview",ratingRoutes);

// default route
app.use("/",(req, res)=> {
    return res.json({
        success:true,
        message:"Your server is up and running...",
    });
});

app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`)
})
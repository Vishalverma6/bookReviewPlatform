const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    author:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    // coverImage:{
    //     type:String,
    // },
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview",
        },
    ]
})

module.exports = mongoose.model("Book", bookSchema);
const Book = require("../models/Book");
const RatingAndReviews = require("../models/RatingAndReviews");



// create review
exports.createReview = async(req, res) => {
    try{
        // get user id 
        const userId= req.user.id;

        if(!userId){
            return res.status(401).json({
                success:false,
                message:"User Id is required",
            })
        }

        // fetched data from req body
        const {rating, review, bookId} = req.body;

        // check if user already reviewd the Book
        const alreadyReviewed = await RatingAndReviews.findOne({
                                                    user:userId,
                                                    book:bookId,
        })
        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"book is already reviewed by the user",
            });
        }
        
        // create the rating into database 
        const ratingAndReview = await RatingAndReviews.create({
                                     rating,review,
                                     user:userId,
                                     book:bookId,
        });

        // update the book with this rating and review
        const updatedBook = await Book.findByIdAndUpdate(bookId, 
            {
                $push:{
                    ratingAndReviews:ratingAndReview._id,
                }
            },
            {new:true},
        );

        //   return response
        return res.status(200).json({
            success:true,
            message:"Rating and review created successfully",
            data:ratingAndReview,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"An error occured while creating Rating ",
            message:error.message,
        });
    }
}

// get the review of a book
exports.getReview = async(req, res)=> {
    try{
        // fetch the book id from req body 
        const {bookId} = req.body;
        if(!bookId){
            return res.status(401).json({
                success:false,
                message:"Book id is required",
            });
        }

        const review = await RatingAndReviews.findById(bookId);

        // return response 
        return res.status(200).json({
            success:true,
            message:"review fetched successfully",
            data:review,
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"An error occured while getting  Rating ",
            message:error.message,
        });
    }
}

// get All the rating and reviews 
exports.getAllReviews = async(req, res) => {
    try{
        const allReviews = await RatingAndReviews.find({})
                                               .sort({rating:"desc"})
                                               .populate({
                                                path:"user",
                                                select:"fullName email",
                                               })
                                               .exec();

        // return response 
        return res.status(200).json({
            success:true,
            message:"All reviews fetched successfully",
            data:allReviews,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"An error occured while getting all  Rating ",
            message:error.message,
        });
    }
}
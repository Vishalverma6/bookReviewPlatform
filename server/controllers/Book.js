const Book = require("../models/Book");


// Add book (only for Admin)
exports.addBook = async(req, res) => {
    try{
        // fetch the data from req body
        const {title,author,description} = req.body;

        // validation
        if(!title || !author || !description){
            return res.status(401).json({
                success:false,
                message:"All fields are required",
            });
        }

        const newBook = await Book.create({
            title,
            author,
            description,
        });

        // return the response
        return res.status(200).json({
            success:true,
            message:"Book Addede Successfully",
            data:newBook,
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Book addition Failed, please try again",
        });
    }
}

// get All books 
exports.getAllBook = async(req, res)=> {
    try{
        const allBook = await Book.find({});

        // return response
        return res.status(200).json({
            success:true,
            message:"All Book fetched successfully",
            data:allBook,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Unable to fecth the All book,please try again",
            error:error.message,
        });
    }
}

// get book by id 
exports.getBook = async(req, res)=> {
    try{
        // fetch the book id from req body
        const {bookId}= req.params;
        // console.log("id",req.body);

        if(!bookId){
            return res.status(401).json({
                success:false,
                message:"Book Id is required",
            })
        }

        const book = await Book.findById(bookId)
                                        .populate({
                                            path:"ratingAndReviews",
                                            populate:{
                                                path:"user",
                                            },
                                            
                                        })

        
        if(!book){
            return res.status(404).json({
                success:false,
                message: "Book not found",
            })
        }
        // return response 
        return res.status(200).json({
            success:true,
            message:"Book details fetched successfully",
            data: book,
        })

    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "Unable to find the book details ",
            error: error.message,
        })
    }
}


// search book 
exports.getSearchBook = async (req, res) => {
    try {
        const { search, minRating, maxRating } = req.query;
        let query = {};

        // Search by title or author
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } }, // Case-insensitive search
                { author: { $regex: search, $options: "i" } }
            ];
        }

        // // Filter by rating range
        // if (minRating || maxRating) {
        //     query.rating = {};
        //     if (minRating) query.rating.$gte = Number(minRating);
        //     if (maxRating) query.rating.$lte = Number(maxRating);
        // }

        // Fetch books from DB
        const books = await Book.find(query);

        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });


    } catch (error) {
        console.error("Error fetching books:", error);
        return res.status(500).json({
            success:false,
            message:"failed to search book",
        })
        
    }
};

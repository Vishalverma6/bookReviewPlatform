const User = require("../models/User");

// get user details 
exports.getUser = async(req, res) => {
    try{
        // fetch the user id from req user
        const userId = req.user.id;

        if(!userId){
            return res.status(401).json({
                success:false,
                message:"User Id is required",
            })
        }
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({
                success:false,
                message: "user not found",
            })
        }

        // return response 
        return res.status(200).json({
            success:true,
            message:"User fetched successfully",
            data:user,
        })
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal error , User not found ",
            error: error.message,
        })
    }
}

// update  the user Details 
exports.updateUserProfile = async(req, res)=> {
    try{
        // fetch the data from req body
        const {fullName, email} = req.body;

        // data validation
        if(!fullName || !email){
            return res.status(401).json({
                success:false,
                message:"All fields are required",
            });
        }
        //  get the user id 
        const userId = req.user.id;

        // data validation
        if(!userId){
            return res.status(401).json({
                success:false,
                message:"User id is required",
            });
        }

        const updatedUserProfile = await User.findByIdAndUpdate(userId,{fullName, email}, {new:true} )

        // return response
        return res.status(200).json({
            success:true,
            message:"User Profile updated Successfully",
            data:updatedUserProfile,
        });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal error , Unable to update the user Details  ",
            error: error.message,
        })
    }
}
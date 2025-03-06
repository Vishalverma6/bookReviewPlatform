const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:String,
        enum:["Admin","User"],
        default:"User",
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },

},
{timestamps:true},
)

module.exports = mongoose.model("User", userSchema);
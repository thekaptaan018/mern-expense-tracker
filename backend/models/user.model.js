//this is an model file where we make model and schema for the db and server
//this file contains the user data model

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required :true,
    },
})
export const User = mongoose.model("User", userSchema);
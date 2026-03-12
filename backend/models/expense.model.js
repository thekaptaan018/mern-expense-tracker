//this is an model file where we make model and schema for the db and server
//this file contains the expense data model

import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    description : {
        type : String,
        required: true,
    },
    amount : {
        type : Number,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    done : {
        type : Boolean,
        default : false,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{timestamps:true});

export const Expense = mongoose.model("Expense",expenseSchema);
const { Query } = require("mongoose")

const mongoose=require(mongoose)
QuerySchema=mongoose.Schema({
    email:String,
    query:String
})
QueryModel=mongoose.model("QuoerySchema")
mongoose.exports =QueryModel
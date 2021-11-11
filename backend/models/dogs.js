const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dog = new Schema ({
    name:String,
    age:Number,
}) 

const dogModel = mongoose.model("Dog", dog)

module.exports = dogModel

const mongoose = require('mongoose')// import mongoose

//Model includes title, URL, description, labels, author, and comment count
//user model
const UserSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please fillout the title field"],
        minLength:[4, 'your title must be at least 4 characters']
    },
    url:{
        type:String,
        required:[true,"please fillout the url"]
    },
    description:{
        type:String,
        required:[true,"please fillout the description field"],
        minLength:[3, 'description must be at least 3 characters']
    },
    labels:{
        type:String,
        required:[true,"Label field is required."],
        minLength:[3, 'label must be at least 3 characters']
    },
    author:{
        type:String,
        required:[true,"Who is the author"],
        minLength:[3, 'author field must be at least 3 characters']
    },
    commentCount:{
        type:Number, 
        default: 0
    },
})

const User = mongoose.model("User",UserSchema) 

module.exports = User //exporting user model in User var
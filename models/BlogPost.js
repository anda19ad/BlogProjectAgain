// Requiring the necessary things from mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Defining the datamodel, to structure data
const BlogPostSchema = new Schema({
    title:String,
    body:String
})

//Saving the model in a const by accessing the database
const BlogPost = mongoose.model('BlogPost',BlogPostSchema)

//Exporting the const, so that it becomes available across the files
module.exports = BlogPost
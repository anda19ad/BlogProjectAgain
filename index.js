// Requiring the necessary things
const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')

//Connecting to mongoDB
mongoose.connect('mongodb://localhost/blog_DB',{useNewUrlParser:true})

//For loading things in the public folder, this being static files
app.use(express.static('public'))

// Setting ejs as templating engine. Furthermore the html files are converted to ejs files, in the views folder
// With ejs we can use res.render
app.set('view engine','ejs')


//Home page
app.get('/',(req,res)=>{
    res.render('index')
    console.log('/')
})

// About page
app.get('/about',(req,res)=>{
    res.render('about')
    console.log('/about')
})

//Contact page
app.get('/contact',(req,res)=>{
    res.render('contact')
    console.log('/contact')
})

//Post page
app.get('/post',(req,res)=>{
    res.render('post')
    console.log('/post')
})

// Server setup 
const port = 4000
const message = 'Listening on http://localhost:'+ port
app.listen(port,()=>{
    console.log(message)
})
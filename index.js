// Requiring the necessary things
const express = require('express')
const app = new express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//Connecting to mongoDB 
mongoose.connect('mongodb://127.0.0.1:27017/blog_DB',{useNewUrlParser:true})

//Som mongoose stuff
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//For loading things in the public folder, this being static files
app.use(express.static('public'))

// Setting ejs as templating engine. Furthermore the html files are converted to ejs files, in the views folder
// With ejs we can use res.render
app.set('view engine','ejs')

// Getting the collection
const BlogPost = require('./models/BlogPost')


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

//Post page, where alle the posted blogs are gathered
app.get('/post',(req,res)=>{
    res.render('post')
    console.log('/post')
})

//Create post page
app.get('/create',(req,res)=>{
    res.render('create')
    console.log('/create')
})

//post a blogpost, and be redirected to home page. Logging the output going to the DB
app.post('/posts/store',async(req,res)=>{
    console.log('Hit')
    //console.log(req.body)
    // Creating a document
    await BlogPost.create(req.body)
    .then(result =>{
        console.log(result)
        res.redirect('/')
    }) .catch(err=>{
        console.log(err)
    })
})

//For testing connection to DB
//app.post()

// Server setup 
const port = 4000
const message = 'Listening on http://localhost:'+ port
app.listen(port,()=>{
    console.log(message)
})
const express = require('express') 
const Todo = require('../models/todo')
const todoSeed = require('../models/seed')
const { response } = require('express')
const router = express.Router()

//Seed Route
router.get('/seed', async(req, res) => {
    await Todo.deleteMany({})
    await Todo.create(todoSeed)
    res.redirect('/todos')

})
//Get route

router.get('/',  (req, res) => {

    Todo.find({})
    .then((todos) => {
     
        res.render('todos/index.ejs', { todos })
        console.log(todos)
    })
    .catch(err => console.log(err))

})

//New route

router.get('/new', (req, res) => {
    res.render("todo/new.ejs")
})

//Post Route
router.post("/", async (req, res) =>{

    req.body.complete = Boolean(req.body.complete)
    await Todo.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect("/todo")
})



module.exports = router
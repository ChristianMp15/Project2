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
    res.render("todos/new.ejs")
})
//Delete Route
router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndRemove(req.params.id)
    res.redirect("/todos")
})
//show route
router.get("/:id", async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    res.render("todos/show.ejs", {todo})
})

//Post Route
router.post("/", async (req, res) =>{

    req.body.complete = Boolean(req.body.complete)
    await Todo.create(req.body).catch((error) => errorHandler(error, res))
    res.redirect("/todos")
})



module.exports = router
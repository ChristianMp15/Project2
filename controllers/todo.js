const express = require('express') 
const Todo = require('../models/todo')

const router = express.Router()

router.get('/seed', (req, res) => {

})
router.get('/', (req, res) => {

    Todo.find({})
    .then((todos) => {
        
        res.render('todos/index.ejs', { todos })
    })
    .catch(err => console.log(err))

})

module.exports = router

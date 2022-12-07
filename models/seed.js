require('dotenv').config()
const mongoose = ('./connection')
const Todo = require('./todo')

mongoose.connection.on('open', () => {
    //Data that we want to display
    const startingTodos = [
        { name: "Work", completed: false },
        { name: "Lunch", completed: false },
        { name: "Break", completed: false},
        { name: "Workout", completed: false},
    ]
    //Delete all todos
    Todo.deleteMany({}, (err, data) => {
        //Create new todos once old ones sre deleted
        Todo.add(startingTodos, (err, data) => {
            console.log(data)
        } )
    })
})
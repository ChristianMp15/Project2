const mongoose = require('./connection')

const { Schema, model } = mongoose

const todosSchema = new Schema({
    name: String,
    completed: Boolean
})

const Todo = model('Todo', todosSchema)

module.exports = Todo
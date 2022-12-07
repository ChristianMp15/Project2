require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const mongoose = require ("mongoose")
const PORT =process.env.PORT || 4500
const TodoRouter = require('./controllers/todo')


//create Express App
const app = express()


//register My middlware
app.use(morgan("dev"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use('/todos', TodoRouter)

//Routes and Routers
// app.get("/", (req, res) =>{
//     res.send("Server is running")
// })

//Server Listener

app.listen(PORT, () => console.log(`Play on ${PORT}`))




require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const mongoose = require ("mongoose")


//create Express App
const app = express()

//Establish mongo connection
mongoose.connect(process.env.DATABASE_URL)


//Mongoose connection
mongoose.connection
.on("open", () => console.log("connected to Mongo"))
.on("close", () => console.log ("Disconnected to Mongo"))
.on ("error", (error) => console.log(error))

//register My middlware
app.use(morgan("dev"))
app.use("/static", express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))

//Routes and Routers
app.get("/", (req, res) =>{
    res.send("<h1>Server is responding</h1>")
})

//Server Listener
const PORT = process.env.PORT || 4500
app.listen(PORT, () => console.log(`Play on ${PORT}`))




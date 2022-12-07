require("dotenv").config()  // Load env variables
const mongoose = require('mongoose') // gives us that db connection and cool methods for CRUD to the datas

const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//Connection
//Establish mongo connection
mongoose.connect(DATABASE_URL, CONFIG)


//Mongoose connection
mongoose.connection
.on("open", () => console.log("connected to Mongo"))
.on("close", () => console.log ("Disconnected to Mongo"))
.on ("error", (error) => console.log(error))

//Export mongoose with connection
module.exports = mongoose
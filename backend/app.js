// configure express and middleware
//import packages
//create express app
//       client => app =>route => response
//configure middleware : function that runs between the req and response
//export app

const express = require("express")
const app = express() //middleware

const auth = require("./routes/auth")
const restaurant = require("./routes/restaurant")


const cors = require("cors")

app.use(cors());            // read data sent from client
app.use(express.json())    //middleware use to read json data


app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users",auth)
app.use("/api/v1/eats/stores",restaurant)




module.exports = app


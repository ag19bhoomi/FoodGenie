// start the server
//will load env variable
//start the server

const app = require("./app");
const connectDatabase = require("./config/database")

const dotenv = require("dotenv");

//load env variable
dotenv.config({path: "./config/config.env"})

//connect to database
connectDatabase();

//start server
app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT: ${process.env.PORT}`)
})
const { Server } = require('http');
const app=require('./app')
//Handling Uncaught Exception like some varibale is not defined 
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log("Shutting Down the server due to unhandled Promise Rejection")
    process.exit(1)
})
require("dotenv").config({ path: "./config/config.env" });
const connectDatabase=require("./config/database")
connectDatabase()

console.log(process.env.PORT)
const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//Unhandled Promise Rejection ex-Error in mongo url
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`)
    console.log("Shutting Down the server due to unhandled Promise Rejection")
    server.close(()=>{
     process.exit(1)
    })
})
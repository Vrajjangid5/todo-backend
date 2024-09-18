const express=require("express");

const app=express();

//load config
require("dotenv").config();
const PORT=3000;

//middleware to parse json
app.use(express.json());

const todoRoute=require("./routes/todos");

//mount the todo aspi routes
app.use("/api/v1",todoRoute);

//start server 
app.listen(PORT,()=>{
    console.log(`server Start ${PORT}`);
})

//connect to db
const database=require("./config/database");
database();

app.get("/",(req,res)=>{
    res.send(`<h1>HELOO </h1>`);
})
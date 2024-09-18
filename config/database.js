const mongoose = require("mongoose");
require("dotenv").config;

const database=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB Conneted")
    })
    .catch((err)=>{
        console.log("ERROR")
        console.log(err.message);
        process.exit(1);
    })
}

module.exports=database;
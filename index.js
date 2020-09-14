const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const app=express();
const port=process.env.port ||8000;
const dbConnection=process.env.dbCon;
console.log(dbConnection);
app.listen(port,()=>console.log(`Server running on ${port}`));
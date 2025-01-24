import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
dotenv.config();
const app=express();
const port=process.env.PORT;
app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(port,()=>{
    console.log(`server working on http://localhost:${port}`);
    connectDb();
})
import 'dotenv/config';
import cors from "cors";
import express from "express";
import { mongoose, Schema } from "mongoose";

//serverside connection setup
mongoose
  .connect(process.env.Database)
  .then(()=>{
    console.log("connected")
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((req,res)=>{
    res.json("error")
  })

//Create the webserver
const app = express();
const routes = 

app.get('/', (req, res) => {
  res.json('Hello World!')
})



import express  from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";
import cookieParser from "cookie-parser";
import { Contact } from "./Models/contact.js";
import bodyparser from 'express';


const app = express();

app.use(bodyparser.json());

mongoose
  .connect(
    "mongodb+srv://shivamji019:FqN8LL38IRDZKKDE@volcanus.8addxe8.mongodb.net/",
    {
      dbName: "MERN_PROJECT_Contct_Keeper",
    }
  )
  .then(() => console.log("mongodb connected..."));


//@route- '/AddContect'
//@method- 'post'

app.post('/addcontact',(req,res)=>{

    // console.log("add contact is working");
    console.log(req.body)

})

//@route- '/getContect'
//@method- 'get'

app.get("/getcontacts",(req,res)=>{

    console.log("get All contacts is working");
})





const port =3000;
app.listen(port ,()=>console.log(`server is running on port ${port} `))


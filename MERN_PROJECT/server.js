import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";
import cookieParser from "cookie-parser";
import { Contact } from "./Models/contact.js";
import bodyparser from "express";

const app = express();

app.use(bodyparser.json());

mongoose
  .connect(
    "mongodb+srv://shivamji019:FqN8LL38IRDZKKDE@volcanus.8addxe8.mongodb.net/",
    {
      dbName: "MERN_PROJECT_Contact_Keeper",
    }
  )
  .then(() => console.log("mongodb connected..."));

//@route- '/AddContect'
//@method- 'post'

app.post("/addcontact", async (req, res) => {
  // console.log("add contact is working");
  // console.log(req.body)

  const { name, gmail, phone, ctype } = req.body;

  let contact = await Contact.findOne({ gmail });
  let phoneNumber = await Contact.findOne({ phone });

  if (contact || phoneNumber)
    return res.json({ message: "Contact Already Exist....!" });

  contact = await Contact.create({
    name,
    gmail,
    phone,
    ctype,
  });
  res.json({ message: "Contact Saved...!" });
});

//@route- '/getContact'
//@method- 'get'

app.get("/getcontacts", async (req, res) => {
  // console.log("get All contacts is working");

  const contacts = await Contact.find();

  res.json({ message: "fetched all contacts ", contacts });
});


//@route - '/:id'
//method- put

app.put('/:id',async (req,res)=>{
// console.log(req.params.id);

const contactId = req.params.id;

let contact = await Contact.findById(contactId);

if (!contact) return res.json({message:"Invalid ID....!"});

const { name, gmail, phone, ctype } = req.body;

contact.name = name;
contact.gmail = gmail;
contact.phone = phone;
contact.ctype = ctype;

await contact.save();

res.json({contact});

})



const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port} `));

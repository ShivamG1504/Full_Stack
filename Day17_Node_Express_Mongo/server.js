import express from "express";
import bodyParser from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import Jwt, { decode } from "jsonwebtoken";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

const arr = [];


mongoose
  .connect(
    "mongodb+srv://shivamji019:FqN8LL38IRDZKKDE@volcanus.8addxe8.mongodb.net/",
    {
      dbName: "Volcanus_MERN",
    }
  )
  .then(() => console.log("mongodb connected..."));

//C R U D
//C = Create-> POST METHOD
//R = Read-> GET METHOD
//U = Update-> PUT METHOD
//D = Delete-> DELETE METHOD

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  gmail: {
    type: String,
    unique: true,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
});
const User = mongoose.model("User", userSchema);

// Read
app.get("/", async(req, res) => {
  // console.log("This is home Route");

  // const token = req.cookies;
  // console.log(token);

  // res.send({
  //   Marvel: "Spiderman",
  //   Shivam: "Shivam Gupta",

  //   data: arr,

  // });

//   res.send("<h1>this send method</h1>");

const token =req.cookies.volcanus;

const decoded = Jwt.verify(token, '!@#$%^&*()');

const userId = decoded.id;

// console.log("decoded data is =", decoded.id)

let user = await User.findById(userId)

res.json({massage:user});

});

app.get("/superman", (req, res) => {
  // console.log("This is superman route")

  res.send({
    Marvel: "saktiman",
    Shivam: "Shivam Gupta",
  });
});

//Login user

app.post("/login", async (req, res) => {
  const { gmail, password } = req.body;

  const user = await User.findOne({ gmail });

  if (user) {
    const isMatch = password == user.password;

    if (isMatch) {

const token = Jwt.sign({ id:user._id }, '!@#$%^&*()');

      return res

        .cookie("volcanus", token, {

          httpOnly: true,

          expires: new Date(Date.now() + 5 * 60 * 1000),
        })

        .json({ massage: user });
    }
  }

  console.log(user);

  // res.json({ massage: "Invalid Creadential" });

  // console.log("login route",req.body)
});

//Create

app.post("/register", async (req, res) => {
  // console.log('post method is working')

  // console.log(req.body.gmail);
  const { name, gmail, password } = req.body;

  let user = await User.findOne({ gmail });
  if (!user) {
    user = await User.create({
      name,
      gmail,
      password,
    });
    console.log(user);

    res.json({
      User,
      message: "USer Registrate Successfuliy..!",
    });
  } else {
    return res.json({ massage: "user already exist.." });
  }

  // arr.push(data);
  // res.send({success:true})
});

app.listen(3000, console.log("server is running on port 3000"));

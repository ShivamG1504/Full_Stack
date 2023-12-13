import express from "express";
import bodyParser from "express";

const app = express();
app.use(bodyParser.json());
const arr = [];

//C R U D
//C = Create-> POST METHOD
//R = Read-> GET METHOD
//U = Update-> PUT METHOD
//D = Delete-> DELETE METHOD

// Read
app.get("/", (req, res) => {console.log("This is home Route" )

res.send({
Marvel:"Spiderman",
Shivam:"Shivam Gupta",

data:arr


})

// res.send('<h1>this send method</h1>')

});


app.get("/superman", (req, res) => {
    
    console.log("This is superman route")
    
    
    res.send({
        Marvel:"saktiman",
        Shivam:"Shivam Gupta"
        
        })

});
//Create

app.post('/userData',(req,res)=>{
console.log('post method is working')

console.log(req.body)
const data=req.body
arr.push(data);
// res.send({success:true})

})



app.listen(3000, console.log("server is running on port 3000"));

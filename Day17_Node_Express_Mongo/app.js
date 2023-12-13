import http from 'http'

const server = http.createServer((req,res)=>{
// console.log(req.url)

if (req.url=="/"){
res.end("<h1>This is the home page</h1>")

}

 else if(req.url==="/shivam"){
    res.end("Welcome to my page");
}
else if(req.url==="/superman"){
    res.end("Welcome to superman page");
}

});
const port=8000;

// console.log(server)

server.listen(port,()=>console.log(`Server is running on port ${port}`))

// console.log(http)
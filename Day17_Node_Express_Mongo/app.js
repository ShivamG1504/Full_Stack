import http from 'http'

const server = http.createServer();

const port=8000;

console.log(server)

server.listen(port,()=>console.log(`Server is running on port ${port}`))

// console.log(http)
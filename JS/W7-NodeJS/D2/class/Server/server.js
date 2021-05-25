// const http = require('http');

// const server = http.createServer((req,res) =>{
//     console.log(req.headers);
//     console.log(req.url);
//     // res.end("hi.....");
//     // res.setHeader('Content-Type', 'text/html');
//     res.setHeader('Content-Type', 'application/json');
// });let user = {
//     name:"Gavin"
// }
// res.end(JSON.stringify(user))

// server.listen(3000);

const exp = require('express');
const bp = require("body-parser");

const app = exp();

app.user

app.use("/", exp.static(__dirname+"/public"))

app.get('/')

// app.get('/', (req,res) => {
//     res.send('<h1>Home page</h1>');
// });
// app.post('/', (req,res) => {

// })

app.listen(3000)
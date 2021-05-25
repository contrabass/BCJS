const http = require ("http");
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.end(JSON.stringify(user));
});

server.listen(8080);
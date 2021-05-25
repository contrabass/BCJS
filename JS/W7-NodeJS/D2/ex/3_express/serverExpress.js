const express = require("express");
const app = express();
const port = 3000

app.get ("/", (req, res) => {
    res.set('content-type', 'text/html');
    res.send("<h1>Hello world!</h1>");
});

app.listen(port, () => {
    console.log(`Exapmle app listening at http://localhost:${port}`)
});
const ourPath = require('path');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>This is a response</h1>')
})

app.listen(3100, ()=> {
    console.log("server is running")
})
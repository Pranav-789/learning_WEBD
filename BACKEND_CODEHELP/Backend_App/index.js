//including express module and initialising an app
const express = require('express');
const app = express();

//variable that stores that port number
const port = 3000;     

app.get('/', (req, res)=>{
    res.send('hello world');
})

app.listen(port, ()=>{
    console.log("Application is started")
})
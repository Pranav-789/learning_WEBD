const express = require('express');
const connectDB = require('./db');
const app = express();
const PORT = 3000;
const users = require('./routes/users')

app.use(express.json());

//connect to database
connectDB();

app.use('/api', users);

app.get('/', (req, res)=>{
    console.log("I'm inside home page route handeler");
    res.send("Hello Welcome to proZero");
})

app.listen(PORT, ()=>{
    console.log(`Sever is up`)
})
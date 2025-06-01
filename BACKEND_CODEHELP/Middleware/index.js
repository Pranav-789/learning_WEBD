const express = require('express');
const app = express();
const port = 3000;


//loading middleware into the app
app.use(express.json());
//inbuilt middle ware

//middleware -> logging, auth, validation

//creation of middleware
// const loggingMiddleWare = function (req, res, next) {
//     console.log("Loging is going on!");
//     next();
// }

// //loading middleware 
// app.use(loggingMiddleWare);

// const authMiddleWare = function (req, res, next) {
//     console.log("Authentication is going on!");
//     next();
// }

// app.use(authMiddleWare);

// const validationMiddleWare = function (req, res, next) {
//   console.log("Validation is going on!");
//   next();
// };

// app.use(validationMiddleWare);


//getting middleware
const route = require("./routes/route");

//mounting route
app.use('/api', route);


app.get("/", (req, res) => {
    console.log(req.body);
  res.send("hello world!");
});

app.listen(port, () => {
  console.log("Application is listening on port ", port);
});
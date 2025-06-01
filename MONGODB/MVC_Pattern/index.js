const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const productRoutes = require('./routes/productRoutes')
const PORT = process.env.PORT;
const connectDB = require('./config/db');

app.use(express.json());

connectDB();

app.use('/api', productRoutes);

app.get("/", (req, res) => {
  console.log("I'm inside home page route handeler");
  res.send("Hello Welcome to proZero2");
});

app.listen(PORT, () => {
  console.log(`Product app is listening on server`);
});

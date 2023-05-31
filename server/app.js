const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")
require('dotenv').config();

const signupRoute= require("./routes/signup")

const app = express();



mongoose
  .connect(process.env.MONGODB_URI,{
    useNewUrlParser:true
  })
  .then(
    app.listen(3003, function () {
      console.log("Server started on port 3003");
    })
  )
  .catch((error) => console.log(error)); 
// app.get("/", function (req, res) {
//   res.send("hello world");
// });
app.use(cors())
app.use(express.json())

app.use("/signup",signupRoute)
 
 
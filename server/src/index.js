const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const app = express();
const PORT =  8000;
const URL = "mongodb+srv://pst:pst123%40@cluster0.lgg8c.mongodb.net/class"

app.use(express.json());

mongoose.connect(URL, {useNewUrlParser:true} )
.then(()=>{
  console.log("MongoDB is connected")
})
.catch((err)=>{
  console.log(err)
});

app.use("/", router)

app.listen(PORT, ()=>{
  console.log("App is running on port 8000")
})


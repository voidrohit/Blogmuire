const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const bcrypt = require("bcrypt");
const User = require("./models/user")
const Post = require("./models/post")

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);
app.use("/posts", postRoute);

app.get('/auth/:id', (req, res) => {
    const _id= req.params.id

    User.findByIdAndUpdate(_id ,{"active": true,}, function(err, result){

        if(err){
            console.log(err);
        }
        else{
            console.log("success");
        }

    })
})



app.listen("5000", () => {
  console.log("Backend is running.");
});

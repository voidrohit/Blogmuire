const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const User = require("./models/user")

dotenv.config();
app.use(express.json());

const port = process.env.PORT || 5000

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
            res.redirect('http://localhost:3000/sign')
        }

    })
})



app.listen(port, () => {
  console.log("Backend is running.");
});

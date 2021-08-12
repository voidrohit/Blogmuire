const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");

dotenv.config();

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });
    var mailquery = User.find({email: req.body.email}); 
    var usernamequery = User.find({username: req.body.name}); 

    mailquery.countDocuments(function (err, count) { 
        if (count === 0) {
            usernamequery.countDocuments(function (err, count2) {
                if (count2 === 0) {
                    newUser.save(function(err){

                        let id = newUser._id
                        let email = newUser.email

                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: process.env.EMAIL ,    // Sender email
                                pass: process.env.PASSWORD  // Sender password
                            }
                        });
                        let mailOptions = {
                            from: 'kabirsinghnitp@gmail.com',
                            to: email,
                            subject: 'Test',
                            text: `Please click on the link provided to activate the account http://localhost:5000/auth/${id}`
                            /////// Change text link while deploying
                        };
                        
                        transporter.sendMail(mailOptions, (err, data) => {
                            if (err) {
                                res.status(500).json(err);
                            } else {
                                res.status(200).json(newUser);
                            }
                    })
                    
                })
                    } else {
                    console.log("no more");
                }
                })

            } else {
                res.status(500).json(err);
                console.log("no more");
            }
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.name });
    !user && res.status(400).json("Wrong credentials!");
    
    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
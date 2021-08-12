const router = require("express").Router();
const User = require("../models/user");
const Post = require("../models/post");

//CREATE POST
router.post("/", async (req, res) => {
  console.log(req.body);
    const newPost = new Post({
      text: req.body.data,
      name: req.body.name
    });
    console.log(newPost);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SPECEFIC POSTS
router.get("/name/:name", async (req, res) => {

  try {
    let posts;
    
      posts = await Post.find({name: req.params.name});

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/delete/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});
  
//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    let posts;
    
      posts = await Post.find();

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/update/:id", async (req, res) => {
  const text = req.body.text
      try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {"text": text});
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
});

  module.exports = router;
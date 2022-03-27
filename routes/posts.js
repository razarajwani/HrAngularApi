const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const jwt = require('jsonwebtoken');
const jwtManager = require('../jwtManager');

// Get All Posts
router.get('/',async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({
            message: err
        });
    }
});

// Find By Id
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);

    } catch (err) {
        res.json({
            message: err
        });
    }
});


// Save Posts
router.post('/', jwtManager.verifyToken,async (req, res) => {
    const post = new Post(req.body);

    try {
        const savePost = await post.save();
        res.status(201).json(savePost);

    } catch (err) {
        res.status(400).json({
            message: err
        });
    }
});


router.patch('/:postId',async (req,res)=>{

    try{ 
        const updatePost= await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );

        res.json(updatePost);

    }catch(err){
        res.json({message:err});
    }

});

// Delete Post
router.delete('/:postId',async (req,res)=>{
    try{
        const removePost= await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message:err});
    }
});


module.exports = router;



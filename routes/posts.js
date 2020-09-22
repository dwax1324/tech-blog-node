const router = require('express').Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.json({ allPosts });
    } catch (err){
        res.json({ err });
    }
})


router.get('/:id', async (req, res) => {
    try {
        const findPost = await Post.findById({ _id: req.params.id });
        res.json(findPost);
    } catch (err) {
        res.json({ message:err });
    }
})

module.exports = router;
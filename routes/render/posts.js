const router = require('express').Router();
const Post = require('../../models/Post');







router.get('/:id', async (req, res) => {
    try {
        const posts = await Post.findById({ _id: req.params.id });
        res.render('updatePosts', { posts: posts });
    } catch (err) {
        res.json({ message:err });
    }
})

// update new post

router.patch('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id:req.params.id },
            {
                $set: { 
                title: req.body.title,
                description: req.body.description
                }
            });
        res.redirect('/render/posts')
    } catch (err) {
        res.json({message:err})
    }

})  





//Delete


router.delete('/:id', async (req, res) => {
        let posts = await Post.findByIdAndDelete(req.params.id);
        res.redirect('/render/posts')
})




module.exports = router;
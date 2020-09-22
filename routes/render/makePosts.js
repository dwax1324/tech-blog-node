const router = require('express').Router();
const Post = require('../../models/Post');


// get new post page

router.get('/', async (req, res) => {
    let posts = new Post({
        title: req.body.title,
        description: req.body.description
    });
    res.render('makePosts',{posts: posts})
    // res.send(1234);
})

// post new post

router.post('/', async (req, res) => {
    let posts = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        posts = await posts.save();
        res.redirect(`/render/posts`);
    } catch (err) {
        res.json({ message: err });
    }
})




module.exports = router;
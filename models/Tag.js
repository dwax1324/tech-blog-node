const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    title: {
        type: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
})


module.exports = mongoose.model('Tag', tagSchema);
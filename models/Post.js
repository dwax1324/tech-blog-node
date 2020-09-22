const mongoose = require('mongoose');
const slugify  = require('slugify');

const postSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
    },
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    tag: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tag"
    }]
    })


// postSchema.pre('validate',function(){
//     if (this.title) {
//         this.slug = slugify(this.title,'-')
//     }

// })


module.exports = mongoose.model('Post', postSchema);
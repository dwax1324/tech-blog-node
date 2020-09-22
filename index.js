const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/Post')
const methodOverride = require('method-override');
const cors = require('cors');

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(cors());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/posts', require('./routes/posts'));
app.use('/render/posts', require('./routes/render/posts'));
app.use('/render/makePosts', require('./routes/render/makePosts'))
const port = process.env.PORT;
const mongoDB = process.env.MONGO_DB; 

var https = require("https");


// 홈- 기본라우트
app.get('/render/posts', async (req, res) => {
    try {
        // const 말고 let을 써줘야한다.(자료가 바뀌기때문)
        let posts = await Post.find().sort({
            date: 'desc'
        });
        // render -> (어디.ejs, {파라미터:파라미터})
        res.render('home', { posts: posts })
    } catch (err) {
        res.render({ message: err });
    }

})
setInterval(()=> {
    console.log("every minutes (60000)");
    https.get(process.env.HEROKU_URL);
}, 60000); 

// DB 연결
mongoose.connect(
    mongoDB,
    { useUnifiedTopology: true, useNewUrlParser: true ,useCreateIndex:true},
    (err) => {
    if (err) console.log(err);
    console.log('mongoose connected');
})


// 서버 포트 연결
app.listen(port, () => {
    console.log(`linstening port ${port}`);
})
const postRouter = require('express').Router();

const getAllposts = (req,res) => {
    res.send('Getting all the posts');
}

const createPost = (req,res) => {
    res.send('Creating one single post');
}

tweetsRouter.route('/');
    .get(getAllposts);
    .post(createPost);

module.exports = postRouter;
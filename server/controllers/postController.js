const Post = require('../models/postModel');


// @desc Get All Posts
// @route GET /posts
// access Public
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            message: 'All Posts Retrieved Successfully',
            data: posts
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: `Internal Server Error: ${error}`
        });
    };
}

// @desc Create a Post
// @route POST /posts
// access Public
const createPost = async (req, res) => {
    if (!req.body) {
        res.status(400).json({
            error: 'No request body'
        })
    }

    const { title, author, content } = req.body;

    const path = req.file?.path ?? null

    try {
        const post = new Post({
            title,
            author,
            content,
            cover_photo: path
        })

        const newPost = await post.save();

        if (newPost) {
            res.status(201).json({
                message: 'Post Created Successfully',
                data: newPost
            })
        }

    } catch (error) {
        console.error(error);
        res.status(422).json(`Error: ${error}`);
    }
}

module.exports = {
    getAllPosts,
    createPost
}
const express = require("express");
const Post = require("../models/post.js");
const Comment = require("../models/comment.js");

const postRouter = express.Router();

// Get all, and new post
postRouter
    .route("/")
    .get((req, res, next) => {
        Post.find((err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .post((req, res, next) => {
        const newPost = new Post(req.body);
        newPost.author = req.user._id;
        newPost.save((err, saved) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(newPost);
        });
    });

// Get by author ID
postRouter.route("/:authorID").get((req, res, next) => {
    Post.findOne({ author: req.params.authorID }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

// Update post, delete post
postRouter
    .route("/:postID")
    .put((req, res, next) => {
        Post.findOneAndUpdate(
            { _id: req.params.postID },
            req.body,
            { new: true },
            (err, updated) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(201).send(updated);
            }
        );
    })
    .delete((req, res, next) => {
        Post.findOneAndDelete({ _id: req.params.postID }, (err, deleted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(deleted);
        });
    });

// Rating

postRouter.route("/upvote/:postID").put((req, res, next) => {
    Post.findOneAndUpdate(
        { _id: req.params.postID },
        { $inc: { upvotes: 1 } },
        { new: true },
        (err, updated) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(updated);
        }
    );
});

postRouter.route("/downvote/:postID").put((req, res, next) => {
    Post.findOneAndUpdate(
        { _id: req.params.postID },
        { $inc: { downvotes: 1 } },
        { new: true },
        (err, updated) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(updated);
        }
    );
});

postRouter.route("/:postID/comment").post((req, res, next) => {
    const newComment = new Comment(req.body);
    newComment.author = req.user._id;
    newComment.post = req.params.postID;
    console.log(newComment.post);
    Post.findOneAndUpdate(
        { _id: req.params.postID },
        { $push: { comments: newComment } },
        { new: true },
        (err, updated) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.send(updated);
        }
    );
});

// WORK ON
postRouter.route("/:postID/comment/:commentID").put((req, res, next) => {
    Post.findOne({ _id: req.params.postID }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        console.log(found);
        Comment.findOneAndUpdate(
            { _id: req.params.commentID },
            req.body,
            { new: true },
            (err, updated) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                console.log(updated);
                res.status(201).send(updated);
            }
        );
    });
});

module.exports = postRouter;

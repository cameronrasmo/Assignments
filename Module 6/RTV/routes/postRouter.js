const express = require("express");
const Post = require("../models/post.js");
const Comment = require("../models/comment.js");
const User = require("../models/user.js");

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
        newPost.authorID = req.user._id;
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
    Post.find({ authorID: req.params.authorID }, (err, found) => {
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

// Post comment
postRouter.route("/:postID/comment").post((req, res, next) => {
    const newComment = new Comment(req.body);
    newComment.authorID = req.user._id;
    newComment.post = req.params.postID;
    newComment.save();
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

// Update comments
postRouter.route("/comment/:commentID").put((req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.commentID },
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
});

// Delete comment
postRouter.route("/:postID/comment/:commentID").delete((req, res, next) => {
    Post.findByIdAndUpdate(
        { _id: req.params.postID },
        { $pull: { comments: req.params.commentID } },
        { new: true },
        (err, deleted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
        }
    );
    Comment.findByIdAndDelete({ _id: req.params.commentID }, (err, deleted) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(deleted);
    });
});

module.exports = postRouter;

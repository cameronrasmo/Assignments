const express = require("express");
const Post = require("../models/post.js");

const postRouter = express.Router();

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

postRouter.route("/:authorID").get((req, res, next) => {
    Post.findOne({ author: req.params.authorID }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

module.exports = postRouter;

const express = require("express");
const Author = require("../models/author.js");
const authorRoute = express.Router();

authorRoute
    .route("/")
    .get((req, res, next) => {
        Author.find((err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .post((req, res, next) => {
        const newAuthor = new Author(req.body);
        newAuthor.save((err, posted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(posted);
        });
    });

authorRoute
    .route("/id/:authorId")
    .get((req, res, next) => {
        Author.find({ _id: req.params.authorId }, (err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .put((req, res, next) => {
        Author.findOneAndUpdate(
            { _id: req.params.authorId },
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
        Author.findOneAndDelete(
            { _id: req.params.authorId },
            (err, deleted) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(200).send(deleted);
            }
        );
    });

authorRoute.route("/search").get((req, res, next) => {
    const { author } = req.query;
    const pattern = new RegExp(author);
    Author.find({ name: { $regex: pattern, $options: "i" } }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

module.exports = authorRoute;

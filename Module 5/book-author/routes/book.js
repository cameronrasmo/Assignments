const express = require("express");
const Book = require("../models/book.js");
const bookRoute = express.Router();

bookRoute
    .route("/")
    .get((req, res, next) => {
        Book.find((err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .post((req, res, next) => {
        const newBook = new Book(req.body);
        newBook.save((err, posted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(posted);
        });
    });

bookRoute
    .route("/:bookId")
    .get((req, res, next) => {
        Book.find({ _id: req.params.bookId }, (err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .put((req, res, next) => {
        Book.findOneAndUpdate(
            { _id: req.params.bookId },
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
        Book.findOneAndDelete({ _id: req.params.bookId }, (err, deleted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(deleted);
        });
    });

bookRoute
    .route("/authors/:authorId")
    .get((req, res, next) => {
        Book.find({ author: req.params.authorId }, (err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .post((req, res, next) => {
        req.body.author = req.params.authorId;
        const newBook = new Book(req.body);
        newBook.save((err, posted) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(posted);
        });
    });

bookRoute.route("/likes/:bookId").put((req, res, next) => {
    Book.findOneAndUpdate(
        { _id: req.params.bookId },
        { $inc: { likes: 1 } },
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

bookRoute.route("/search/bylikes").get((req, res, next) => {
    Book.where("likes")
        .gte(10)
        .exec((err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
});

module.exports = bookRoute;

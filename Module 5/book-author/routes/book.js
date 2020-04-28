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

module.exports = bookRoute;

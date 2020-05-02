const express = require("express");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.route("/signup").post((req, res, next) => {
    User.findOne({ username: req.body.username }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        if (found) {
            res.status(500);
            return next(new Error("UN already exists, try another."));
        }
        const newUser = new User(req.body);
        newUser.save((err, saved) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            const token = jwt.sign(newUser.toObject(), process.env.SECRET);
            res.status(201).send({ token, user: newUser });
        });
    });
});

authRouter.route("/login").post((req, res, next) => {
    User.findOne({ username: req.body.username }, (err, found) => {
        if (err) {
            res.status(500);
            return next(new Error("UN or PW incorrect"));
        }
        if (!found) {
            res.status(403);
            return next(new Error("UN or PW incorrect"));
        }
        if (req.body.password !== found.password) {
            res.status(401);
            return next(new Error("UN or PW incorrect"));
        }
        const token = jwt.sign(found.toObject(), process.env.SECRET);
        res.status(200).send({ token, user: found });
    });
});

module.exports = authRouter;

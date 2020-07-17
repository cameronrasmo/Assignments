const express = require("express");
const Project = require("../models/project.js");

const projectRouter = express.Router();

const colors = [
    ["#3a3648", "#754d4d"],
    ["#6D7655", "#51467C"],
    ["#5A5576", "#46737C"],
    ["#765555", "#7B467C"],
];

projectRouter.route("/all").get((req, res, next) => {
    Project.find((err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

projectRouter
    .route("/:projectID")
    .get((req, res, next) => {
        Project.findOne({ _id: req.params.projectID }, (err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .put((req, res, next) => {
        Project.findOneAndUpdate(
            { _id: req.params.projectID },
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

projectRouter.route("/").post((req, res, next) => {
    const newProject = new Project(req.body);
    newProject.color = colors[Math.floor(Math.random() * colors.length)];
    newProject.save((err, saved) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(201).send(saved);
    });
});

module.exports = projectRouter;

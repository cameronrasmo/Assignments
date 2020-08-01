const express = require("express");
const taskRouter = express.Router();
const Task = require("../models/task.js");
const Project = require("../models/project.js");

taskRouter.route("/").get((req, res, next) => {
    Task.find((err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

taskRouter.route("/:taskID").get((req, res, next) => {
    Task.find({ _id: req.params.taskID }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
})

taskRouter.route("/add/:projectID").post((req, res, next) => {
    const newTask = new Task(req.body);
    newTask.project = req.params.projectID;
    Project.findOneAndUpdate({ _id: req.params.projectID }, { $push: { backlog: newTask } }, { new: true }, (err, updated) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        newTask.save((err, saved) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(saved);
        });
    })
});

taskRouter.route("/:taskID").put((req, res, next) => {
    Task.findOneAndUpdate({ _id: req.params.taskID }, req.body, { new: true }, (err, updated) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(201).send(updated);
    })
})

module.exports = taskRouter;

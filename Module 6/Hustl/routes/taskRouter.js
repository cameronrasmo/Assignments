const express = require("express");
const taskRouter = express.Router();
const Task = require("../models/task.js");

taskRouter.route("/").get((req, res, next) => {
    Task.find((err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

taskRouter.route("/:projectID").get((req, res, next) => {
    Task.find({ project: req.params.projectID }, (err, found) => {
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
    newTask.save((err, saved) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(201).send(saved);
    });
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

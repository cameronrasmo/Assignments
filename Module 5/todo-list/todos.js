const express = require("express");
const todoRouter = express.Router();
const uuid = require("uuid/v4");

const list = [
    {
        name: "Wash the car",
        description: "Just go wash the car pls",
        completed: "true",
        _id: uuid(),
    },
    {
        name: "Do the dishes",
        description: "They're all dirty",
        completed: "false",
        _id: uuid(),
    },
    {
        name: "Watch a Netflix special",
        description: "Not the office this time",
        completed: "false",
        _id: uuid(),
    },
];

todoRouter
    .route("/")
    .get((req, res) => {
        res.send(list);
    })
    .post((req, res) => {
        const newTodo = req.body;
        newTodo._id = uuid();
        list.push(newTodo);
        res.send(`Successfully added todo: ${newTodo.name}`);
    });

todoRouter
    .route("/:todoId")
    .get((req, res) => {
        const id = req.params.todoId;
        const found = list.filter((todo) => todo._id === id);
        res.send(found);
    })
    .put((req, res) => {
        const id = req.params.todoId;
        const foundIdx = list.findIndex((todo) => todo._id === id);
        Object.assign(list[foundIdx], req.body);
        res.send(`Successfully updated ${list[foundIdx].name}`);
    })
    .delete((req, res) => {
        const id = req.params.todoId;
        const foundIdx = list.findIndex((todo) => todo._id === id);
        const prevName = list[foundIdx].name;
        list.splice(foundIdx, 1);
        res.send(`Successfully deleted: ${prevName}`);
    });

module.exports = todoRouter;

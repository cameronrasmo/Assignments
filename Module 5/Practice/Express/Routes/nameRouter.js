const express = require("express");
const uuid = require("uuid/v4");
const nameRouter = express.Router();

const names = [
    {
        name: "jimmy bean",
        amountOfDrugs: 20,
        _id: uuid(),
    },
    {
        name: "jonathan",
        amountOfDrugs: "only a small amount",
        _id: uuid(),
    },
    {
        name: "joe exotic",
        amountOfDrugs: 10000000000000000,
        _id: uuid(),
    },
];

nameRouter
    .route("/")
    .get((req, res) => {
        res.send(names);
    })
    .post((req, res) => {
        names.push(req.body);
        req.body._id = uuid();
        res.send(`Submitted ${req.body.name} successfully!`);
    });

module.exports = nameRouter;

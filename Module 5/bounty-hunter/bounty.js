const express = require("express");
const bountyRoute = express.Router();
const uuid = require("uuid/v4");

const bounties = [
    {
        firstName: "Sheev",
        lastName: "Palpatine",
        living: true,
        bountyAmount: 6000,
        type: "Sith",
        _id: uuid(),
    },
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 4000,
        type: "Jedi",
        _id: uuid(),
    },
    {
        firstName: "Count",
        lastName: "Dookie",
        living: true,
        bountyAmount: 6000,
        type: "Sith",
        _id: uuid(),
    },
];

bountyRoute.route("/").get((req, res) => {
    res.send(bounties);
});

module.exports = bountyRoute;

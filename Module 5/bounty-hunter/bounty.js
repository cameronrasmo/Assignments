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

bountyRoute
    .route("/")
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid();
        bounties.push(newBounty);
        res.send(newBounty);
    });

bountyRoute
    .route("/:bountyId")
    .get((req, res) => {
        const id = req.params.bountyId;
        const found = bounties.find((item) => item._id === id);
        res.send(found);
    })
    .put((req, res) => {
        const id = req.params.bountyId;
        const foundIdx = bounties.findIndex((bounty) => bounty._id === id);
        Object.assign(bounties[foundIdx], req.body);
        res.send(`Successfully updated bounty.`);
    })
    .delete((req, res) => {
        const id = req.params.bountyId;
        const foundIdx = bounties.findIndex((bounty) => bounty._id === id);
        res.send("Successfully deleted bounty.");
        bounties.splice(foundIdx, 1);
    });

bountyRoute.route("/search/type").get((req, res) => {
    const query = req.query;
    const found = bounties.filter((item) => item.type === query.type);
    res.send(found);
});

module.exports = bountyRoute;

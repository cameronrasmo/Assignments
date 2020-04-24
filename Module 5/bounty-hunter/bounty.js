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
        res.status(201).send(newBounty);
    });

bountyRoute
    .route("/:bountyId")
    .get((req, res, next) => {
        const id = req.params.bountyId;
        const found = bounties.find((item) => item._id === id);
        if (!found) {
            const err = new Error(
                `Could not find specified bounty with ID: ${id}.`
            );
            res.status(500);
            return next(err);
        }
        res.send(found);
    })
    .put((req, res, next) => {
        const id = req.params.bountyId;
        const foundIdx = bounties.findIndex((bounty) => bounty._id === id);
        if (foundIdx === -1) {
            const err = new Error(
                `Could not update specified bounty with ID: ${id}.`
            );
            res.status(500);
            return next(err);
        }
        Object.assign(bounties[foundIdx], req.body);
        res.status(201).send(`Successfully updated bounty.`);
    })
    .delete((req, res) => {
        const id = req.params.bountyId;
        const foundIdx = bounties.findIndex((bounty) => bounty._id === id);
        res.send("Successfully deleted bounty.");
        bounties.splice(foundIdx, 1);
    });

bountyRoute.route("/search/type").get((req, res, next) => {
    const query = req.query;
    const found = bounties.filter((item) => item.type === query.type);
    if (found.length === 0) {
        const err = new Error(
            `Could not find specified bounty with query: ${query.type}`
        );
        res.status(500);
        return next(err);
    }
    res.send(found);
});

module.exports = bountyRoute;

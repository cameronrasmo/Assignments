const express = require("express");
const bountyRoute = express.Router();
const Bounty = require("./models/bounty.js");

bountyRoute
    .route("/")
    .get((req, res, next) => {
        Bounty.find((err, bounties) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(bounties);
        });
    })
    .post((req, res, next) => {
        const newBounty = new Bounty(req.body);
        newBounty.save((err, saved) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(newBounty);
        });
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
        Bounty.findOneAndUpdate(
            { _id: req.params.bountyId },
            req.body,
            { new: true },
            (err, updated) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(201).send(
                    `Updated ${updated.firstName} ${updated.lastName}`
                );
            }
        );
    })
    .delete((req, res, next) => {
        Bounty.findOneAndDelete(
            { _id: req.params.bountyId },
            (err, deleted) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(200).send(
                    `Successfully deleted ${deleted.firstName} ${deleted.lastName}`
                );
            }
        );
    });

bountyRoute.route("/search/type").get((req, res, next) => {
    Bounty.find({ type: req.query.type }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        res.status(200).send(found);
    });
});

module.exports = bountyRoute;

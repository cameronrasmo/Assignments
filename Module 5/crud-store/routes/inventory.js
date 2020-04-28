const express = require("express");
const inventoryRoute = express.Router();
const InventoryModel = require("../models/inventory.js");

inventoryRoute
    .route("/")
    .get((req, res, next) => {
        InventoryModel.find((err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .post((req, res, next) => {
        const newItem = new InventoryModel(req.body);
        newItem.save((err, post) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(newItem);
        });
    });

inventoryRoute
    .route("/:itemId")
    .get((req, res, next) => {
        InventoryModel.find({ _id: req.params.itemId }, (err, found) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(found);
        });
    })
    .put((req, res, next) => {
        InventoryModel.findOneAndUpdate(
            { _id: req.params.itemId },
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
    })
    .delete((req, res, next) => {
        InventoryModel.findOneAndDelete(
            { _id: req.params.itemId },
            (err, deleted) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                res.status(200).send(deleted);
            }
        );
    });

module.exports = inventoryRoute;

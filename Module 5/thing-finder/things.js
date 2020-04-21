const express = require("express");
const thingsRouter = express.Router();

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },
    {
        name: "pants",
        type: "clothing",
        price: 2500,
    },
    {
        name: "basket ball",
        type: "toy",
        price: 1000,
    },
    {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },
    {
        name: "shirt",
        type: "clothing",
        price: 800,
    },
    {
        name: "soup",
        type: "food",
        price: 300,
    },
    {
        name: "flour",
        type: "food",
        price: 100,
    },
];

thingsRouter.route("/search").get((req, res) => {
    if (req.query.type !== undefined) {
        const { type } = req.query;
        const found = inventoryItems.filter((item) => item.type === type);
        res.send(found);
    } else if (req.query.filter !== undefined && req.query.filter === "max") {
        const maxSort = inventoryItems.sort((a, b) => {
            const itemA = a.price;
            const itemB = b.price;

            let comp = 0;
            if (itemA > itemB) {
                comp = -1;
            } else if (itemA < itemB) {
                comp = 1;
            }

            return comp;
        });
        res.send(maxSort);
    } else if (req.query.filter !== undefined && req.query.filter === "min") {
        const minSort = inventoryItems.sort((a, b) => {
            const itemA = a.price;
            const itemB = b.price;

            let comp = 0;
            if (itemA > itemB) {
                comp = 1;
            } else if (itemA < itemB) {
                comp = -1;
            }

            return comp;
        });
        res.send(minSort);
    }
});

module.exports = thingsRouter;

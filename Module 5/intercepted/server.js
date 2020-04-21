const express = require("express");
const app = express();
const middle = require("./middle.js");

const obj = {
    name: "Somebody Famous :D",
    age: "53",
};

app.use(express.json());

app.use(middle);

app.get("/", (req, res) => {
    Object.assign(obj, req.body);
    res.send(obj);
});

app.listen(9000, () => {
    console.log("Connected to local port 9000");
});

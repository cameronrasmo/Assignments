const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(express.json());
app.use((req, res, next) => {
    console.log("Processing");
    next();
});
app.use(morgan("dev"));

mongoose.connect(
    "mongodb://localhost:27017/bountiesdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("Connected to DB")
);

app.use("/bounties", require("./bounty.js"));

app.use((err, req, res, next) => {
    return res.send({ error: err.message });
});

app.listen(9000, () => {
    console.log("Connected to port 9000.");
});

const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Processing");
    next();
});

app.use("/bounties", require("./bounty.js"));

app.use((err, req, res, next) => {
    return res.send({ error: err.message });
});

app.listen(9000, () => {
    console.log("Connected to port 9000.");
});

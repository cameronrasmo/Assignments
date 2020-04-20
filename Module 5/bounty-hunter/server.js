const express = require("express");
const app = express();

app.use(express.json());

app.use("/bounties", require("./bounty.js"));

app.listen(6000, () => {
    console.log("Connected to port 6000.");
});
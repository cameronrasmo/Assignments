const express = require("express");
const app = express();

app.use(express.json());

app.use("/things", require("./things.js"));

app.listen(9000, () => {
    console.log("connected port 9000");
});

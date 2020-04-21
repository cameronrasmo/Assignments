const express = require("express");
const app = express();

app.use(express.json());

app.use("/todos", require("./todos.js"));

app.listen(9000, () => {
    console.log("Connected to local port 9000");
});

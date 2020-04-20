const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", require("./Routes/nameRouter.js"));

app.listen(9000, () => {
    console.log("yes bitch");
});

const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", require("./routes/authRouter.js"));

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});

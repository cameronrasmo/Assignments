const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
mongoose.connect(
    "mongodb://localhost:27017/rtv-db",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("MongoDB");
    }
);

app.use("/auth", require("./routes/authRouter.js"));

app.use((err, req, res, next) => {
    return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
    console.log("9000");
});

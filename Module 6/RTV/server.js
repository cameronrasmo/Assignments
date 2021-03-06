const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
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
        console.log("Connected to MongoDB");
    }
);
app.use(express.static("./uploads"));
app.use("/auth", require("./routes/authRouter.js"));
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use("/api/users", require("./routes/authRouter"));
app.use("/api/posts", require("./routes/postRouter"));
app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
    console.log("Connected to port 9000");
});

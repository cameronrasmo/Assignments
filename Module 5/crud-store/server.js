const express = require("express");
const app = express();

const mongoose = require("mongoose");

const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));
mongoose.connect(
    "mongodb://localhost:27017/crudstoredb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => {
        console.log("DB Connected");
    }
);

app.use("/inventory", require("./routes/inventory.js"));

app.use((err, req, res, next) => {
    return res.send({ err: err.message });
});

app.listen(9000, () => {
    console.log("Port 9000 Connected");
});

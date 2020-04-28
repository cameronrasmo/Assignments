const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

mongoose.connect(
    "mongodb://localhost:27017/books-authors-db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => {
        console.log("Connected to MongoDB");
    }
);

app.use("/books", require("./routes/book.js"));
app.use("/authors", require("./routes/author.js"));

app.use((err, req, res, next) => {
    return res.send({ err: err.message });
});

app.listen(9000, () => {
    console.log("Connected to port 9000");
});

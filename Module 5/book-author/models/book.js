const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    likes: {
        type: Number,
        default: 0,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    publishingDate: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Book", bookSchema);

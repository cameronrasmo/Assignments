const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    postDate: {
        type: Date,
        default: Date.now,
    },
    postBody: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: false,
    },
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("Post", postSchema);

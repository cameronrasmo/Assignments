const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["video-games", "health", "furniture"],
    },
});

module.exports = mongoose.model("InventoryModel", inventorySchema);

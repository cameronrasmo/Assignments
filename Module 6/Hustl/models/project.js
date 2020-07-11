const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "New Project",
    },
    description: {
        type: String,
        default: "A beautiful description",
    },
    color: {
        type: [],
        required: true,
    },
    backlog: [{ type: Schema.Types.ObjectId, ref: "backlog" }],
    inProgress: [{ type: Schema.Types.ObjectId, ref: "inProgress" }],
    completed: [{ type: Schema.Types.ObjectId, ref: "completed" }],
});

module.exports = mongoose.model("Project", ProjectSchema);

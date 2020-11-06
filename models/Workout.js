const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    exercise: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
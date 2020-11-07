const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    exercises: {
        type: Array,
        default: [],
    },
    day: {
        type: Date,
        default: Date.now(),
    },
    totalDuration: {
        type: Number,
        default: 0
    }
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
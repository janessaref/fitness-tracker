// we need to make createWorkout function
// addExercise function
// getLastWorkout

const Workout = require("../models/Workout");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({}).sort({ _id: -1 }).limit(1)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } })
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
// require our workout model
const Workout = require("../models/Workout");

module.exports = function(app) {
    // grabs the most recent workout
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .sort({ _id: -1 }).limit(1)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                console.log(err);
            });
    });

    // when user wants to add more exercises, this put request is being called
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                console.log(err);
            });
    });

    // saves the workouts into the database
    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
            .then(dbWorkout => {
                res.send(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    // displays the data on the dashboard
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });
};
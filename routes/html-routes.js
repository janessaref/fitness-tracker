const path = require("path");

// when links are clicked, user will be brought to the right content page
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "index.html"));
    });

    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
    });

    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
    });
};
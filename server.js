const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

// const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require(path.join(__dirname, "routes", "html-routes.js"))(app);
require(path.join(__dirname, "routes", "api-routes.js"))(app);
// app.use(require("./routes/api-routes.js"));
// require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
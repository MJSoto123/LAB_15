const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const initCourses = require('./Controlllers/courses');

const app = express();

mongoose.connection.on("open", () => {
  console.log("Database conected");
});
const URI = "mongodb://localhost:27017/lab_15";

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, {ssl:true});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Listening from port 3000");
});
app.set('view engine', 'ejs');

app.use(require('./Routes/routes'));
initCourses.run();
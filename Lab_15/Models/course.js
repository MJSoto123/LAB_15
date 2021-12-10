const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    name_course: {
        type: String,
    },
    students: [
        {
            name: {
                type: String,
              },
            note: {
                type: Number,
            },
        }
    ]
});
module.exports = mongoose.model("Course", courseSchema);

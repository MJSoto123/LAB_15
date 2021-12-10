const courses = require("../courses.json");
const Course = require("../Models/course.js");

module.exports = {
  nombre: "initCourses",
  run:() => {
    Course.deleteMany().then(function(){
        console.log("Data deleted"); // Success
    }).then(function(){
        courses.forEach(i => {
          const newCourse = new Course({
            name_course: `${i.name_course}`,
            students: i.students,
          });
          newCourse.save();
      })
    }).then(function(){
      console.log("Base de datos inicializada con éxito")
    })
  }
}
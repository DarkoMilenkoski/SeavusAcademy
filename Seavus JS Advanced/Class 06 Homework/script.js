$.ajax({
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    success: function(response) {
        let obj = jQuery.parseJSON(response);
        console.log(obj);
        log(obj);
    },
    error: function(response) {
        console.warn("error has occured");
    },
    complete: function() {
        console.log("done");
    }
})
function log(students){
    let avgGradeAboveThreeStudents = students.filter(students => students.averageGrade > 3);
    console.log(avgGradeAboveThreeStudents);

    let bestFemaleStudents = students
    .filter(students => students.averageGrade === 5 && students.gender === "Female")
    .map(student => student.firstName);
    console.log(bestFemaleStudents);

    let adultMaleSkopjeStudents = students
    .filter(student => student.gender === "Male" && student.age > 18 && student.city === "Skopje")
    .map(student => `${student.firstName} ${student.lastName}`);
    console.log(adultMaleSkopjeStudents);

    let avgGradesOfFemalesAbove24 = students
    .filter(student => student.gender === "Female" && student.age > 24)
    .map(student => student.averageGrade);
    console.log(avgGradesOfFemalesAbove24);

    let bMalesWithAvgGradeOverTwo = students.filter(student => student.gender === "Male" && student.firstName[0] === "B");
    console.log(bMalesWithAvgGradeOverTwo);
}

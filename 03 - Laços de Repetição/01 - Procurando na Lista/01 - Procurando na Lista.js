const students = ["João", "Julia", "Caio", "Ana"];
const studentsAverage = [10, 7, 9, 6];
let studentsAndPoints = [students, studentsAverage];

const displayNameAndNote = (studentName) => {
    if(studentsAndPoints[0].includes(studentName)) {
        index = studentsAndPoints[0].indexOf(studentName);

        return studentsAndPoints[0][index] + ", your average is " + studentsAndPoints[1][index];
    } else {
        return "Unregistered student";
    }
};

console.log(displayNameAndNote("Julia"));
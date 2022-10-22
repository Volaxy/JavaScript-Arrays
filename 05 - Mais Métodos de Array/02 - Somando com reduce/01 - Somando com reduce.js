const JSClass = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const JavaClass = [6, 5, 8, 9, 5, 6];
const PythonClass = [7, 3.5, 8, 9.5];

function classAverage(classNotes) {
    // The "acumulator" is the current sum of the calculations, the "current" is the current value in the array, and the "0" is the initial value of the acumulator when the function starts
    const notesSum = classNotes.reduce((acumulator, current) => current + acumulator, 0);

    return notesSum / classNotes.length;
}

console.log(`Class Average of JavaScript: ${classAverage(JSClass)}`);
console.log(`Class Average of Java: ${classAverage(JavaClass)}`);
console.log(`Class Average of Python: ${classAverage(PythonClass)}`);


// Calculate the average of a notes series
const notes = [10, 6.5, 8, 7];
const average = notes.reduce((acumulator, currentValue) => currentValue + acumulator, 0) / notes.length;
console.log(average);
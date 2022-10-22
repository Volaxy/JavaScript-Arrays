const names = ["Ana", "Marcos", "Maria", "Mauro"];
const notes = [7, 4.5, 8, 7.5];

// The filter receives a condition function and returns the occurrences that are true
// The "_" indicates to JS that the parameter will not be used, and when the code is executed, JS will not declare the variable
const faileds = names.filter((_, index) => notes[index] < 5 );
console.log(`Faileds: ${faileds}`);
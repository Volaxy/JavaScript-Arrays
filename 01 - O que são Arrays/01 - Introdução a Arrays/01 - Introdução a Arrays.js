// Calculate the grade point average
//              0    1   2   3
const points = [10, 5.5, 7, 3.75];

// Access to the array is done using the concept of "[INDEX]" where in "INDEX" we refer to the index of the array that we want to access
let average = (points[0] + points[1] + points[2] + points[3]) / points.length;

console.log(average);
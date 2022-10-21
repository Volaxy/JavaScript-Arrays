const names = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie"];

// His begin in the index 1, delete 2 values in the array, and insert the "Rodrigo"
names.splice(1, 2, "Rodrigo");

console.log(names);


// His begin in the index 2, delete 0 values in the array, and insert the "Rodrigo" after the index 2
names.splice(2, 0, "Rodrigo");

console.log(names);
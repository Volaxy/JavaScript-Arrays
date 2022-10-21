const names = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "Andre", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinicius", "Renan", "Renata", "Daisy", "Camilo"];

const room1 = names.slice(0, names.length / 2);
// When the 2nd argument is not passed, the method splits the array from the starting point passed in the 1st argument to the end
const room2 = names.slice(names.length / 2);

console.log(`Class 1 Students: ${room1}`);
console.log(`Class 2 Students: ${room2}`);
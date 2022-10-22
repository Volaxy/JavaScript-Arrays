const notes = [10, 9, 8, 7, 6];

const notesUpdated = notes.map(note => note == 10 ? note : ++note); // This sum, then return the value
console.log(notesUpdated);
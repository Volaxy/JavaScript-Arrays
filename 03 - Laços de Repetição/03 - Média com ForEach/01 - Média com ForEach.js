const points = [3, 7, 5, 8];

let sum = 0;
points.forEach((note, index, array) => {
    sum += note;

    console.log(`Element: ${note}\nIndex: ${index}\nArray: ${array}`);
});

console.log(sum);
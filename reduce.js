const numbers = [1, 1, 2, 3]; // calcule the sum of all the numbers

let sum = 0; // accumulator
// old way of doing it
for (let n of numbers) {
    sum += n;
}

console.log("Jeito 1:", sum)

// cleaner way of doing it:
// reduce all of the elements in the array into a single value; it can be a number, string, object, etc., anything
const SUM = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // returns = accumulator
}, 0); // it takes a callback function with two parameters; if there's nothing instead of "0", accumulator will be set to the first item of the array

console.log("Jeito 2:", SUM)

const fruits = ['Apple', 'Banana', 'Cherry']; // Creating an array of fruits

console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']
console.log(fruits[0]); // Accessing the first element of the array
console.log(fruits.length); // Getting the length of the array
console.log(fruits[fruits.length - 1]); // Accessing the last element of the array
console.log(fruits.indexOf('Banana')); // Getting the index of an element in the array
console.log(fruits.includes('Cherry')); // Checking if an element exists in the array

console.log("slice: ", fruits.slice(1, 3)); // Slicing the array from index 1 to 3 (not including index 3)
console.log("splice: ", fruits.splice(2, 1, 'Blueberry')); // Splicing the array from index 1, removing 1 element and adding 'Blueberry'
console.log("Push: ", fruits.push('Fig')); // Adding an element to the end of the array
console.log("Pop: ", fruits.pop()); // Removing the last element of the array
console.log("Shift: ", fruits.shift()); // Removing the first element of the array
console.log("unshift ", fruits.unshift('Grape')); // Adding an element to the beginning of the array

const newFruits = fruits.concat(['Date', 'Elderberry']); // Concatenating two arrays
console.log(newFruits, '\n');

fruits.forEach(fruit => console.log(fruit)); // forEach is used to iterate over an array and perform a function on each element. It does not return a new array
fruits.forEach((fruit, index) => {
    console.log('\n', index + ': ' + fruit);
});


const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num); // transforms each element in the array and returns a new array
console.log(squares);
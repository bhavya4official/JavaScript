const intrestRate = 1; // Constant variable
console.log(intrestRate);

// Data type = Primitives/Value(5) type & Reference type(3)

let name = 'Honey'; // Declaring and initializing the variable = String literal
let number = 7; // Number literal
let isApproved = true; // Boolean literal
let latName = undefined; // undefined variable (default value of a variable)
let selectedColor = null; // null variable

//Objet
let person = {
    // key - value pairs or properties
    name: 'Honey',
    gender: 'Male'
}; // object literal

// Changing value using Dot notation
person.name = 'Golu';

// Bracket notaion
person['name'] = 'Sam';

let selectedKey = 'name';  // User can select the target property at run time
person[selectedKey] = 'Tom'; // Accessing the property dynamically

// Array is object in js
let selectedColors = ['red','blue'];    //Array literal
selectedColors[2] = 4;  // object & size of array is dynamic
console.log(selectedColors.length);

// Function
function greet(name) { // name is parameter of greet function
    console.log('Hello ' + name)
}

greet('Golu'); // Golu is argument of greet function
greet('Molu')

function square(number) {
    return number * number;
}

console.log(square(2));
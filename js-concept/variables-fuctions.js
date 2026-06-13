// JavaScript concepts for interview preparation

// Function inside an object
const person = {
    key: 'Value',
    num: 1,
    greet: function () { console.log('Hello World ' + this.key); }
}

person.greet();
person.key = 'New Value';


console.log('Hello World ' + person.key);

// Function declaration
function Person(person) {
    console.log('Inside a function ' + person.key);
    return person.num + 1;
}
const newNum = Person(person);
console.log(newNum);

// Function declaration with no name
const anonymous = function (person) {
    return 'Anonymous function ' + person.key;
}
console.log(anonymous(person));

// Arrow Function declaration
const arrow = (person) => 'Arrow function ' + person.key;
console.log(arrow(person));

// var is a default variable. It is function/global scoped and can be updated & re-declared
function varExample() {
    var x = 1;
    console.log(x);
    if (true) {
        var x = 2;
        console.log(x); // 2
        y = 3; // y is global scoped
    }
    console.log(x); // 2
    console.log(y); // 3
}
varExample();

// let is block scoped & can be updated but not re-declared within the same scope
function letExample() {
    let x = 1;
    console.log(x);
    if (true) {
        let x = 4;
        console.log(x); // 4
    }
    console.log(x); // 1
    x += 1; // updating x
    console.log(x); // 2
}
letExample();

// const is block scoped & cannot be updated or re-declared within the same scope
function constExample() {
    const x = 1;
    console.log(x);
    if (true) {
        const x = 2;
        console.log(x); // 2
    }
    console.log(x); // 1
}
constExample();


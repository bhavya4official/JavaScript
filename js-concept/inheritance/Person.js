// Define a parent class with some properties and methods
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method to get the person's information
    greet() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

export default Person;
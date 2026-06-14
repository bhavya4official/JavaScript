import Person from './Person.js';

// Define a child class that inherits from the parent class
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Super keyword is used to Call the parent class constructor
        this.grade = grade; // Add a new property specific to the child class
    }

    // Override the greet method from the parent class
    greet() {
        super.greet(); // Super keyword is used to Call the parent class greet method
        console.log(`Student Grade: ${this.grade}`); // Add additional behavior
    }

    getStudentInfo() {
        const personInfo = super.greet(); // Call the parent class greet method to get basic info
        return `${personInfo}, Grade: ${this.grade}`; // Combine parent info with child-specific info
    }
}

// export the child class for use in other modules
export default Student;
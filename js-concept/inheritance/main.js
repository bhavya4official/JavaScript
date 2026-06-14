//import the Student class from the Student.js module
import Student from '../Student.js';

// Create an instance of the child class Student
const student1 = new Student('Alice', 20, 'A');

// Call the greet method, which is overridden in the Student class
student1.greet();

// Call the getStudentInfo method to get combined information
console.log(student1.getStudentInfo()); // Output: Hello, my name is Alice and I am 20 years old. Grade: A
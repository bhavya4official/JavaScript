/**
A classic programming interview question that involves using array methods (filter, map, reduce), and JavaScript objects.
Create an array of objects representing students with their names and scores, and get the below result with optimized solution.
1. Filters out students who passed in the xam with score more than 36.
2. Update Passed students names to uppercase.
3. total score of all passing students
 */

const students = [
    { name: 'John', score: 45 },
    { name: 'Jane', score: 30 },
    { name: 'Bob', score: 50 },
    { name: 'Alice', score: 25 },
    { name: 'Tom', score: 40 }
];

// Filter method iterates through the array and returns a new array having only the students who passed the exam (score > 36). The map method then transforms the names of the passing students to uppercase. Finally, the reduce method calculates the total score of all passing students by summing their scores.

const passedStudents = students.filter(student => student.score > 36);
console.log(passedStudents);

const upperCaseName = passedStudents.map(student => student.name.toUpperCase());
console.log(upperCaseName);

const sumScore = passedStudents.reduce(function(i, student) {
    i = i + student.score; // 45 = 0 + 45 in first iteration
    return i;
},0);
console.log("\n",sumScore);

/* 2nd Solution */

// const passingStudents = students
//     .filter(student => student.score > 36) // Step 1: Filter students who passed
//     .map(student => ({ ...student, name: student.name.toUpperCase() })); // Step 2: Update names to uppercase

// const totalScore = passingStudents.reduce((total, student) => total + student.score, 0); // Step 3: Calculate total score

// console.log('Passing Students:', passingStudents);
// console.log('Total Score of Passing Students:', totalScore);
// JavaScript is asynchronous by nature, meaning that it can execute code without blocking the main thread. This allows for tasks such as fetching data from an API, reading files, or performing time-consuming operations without freezing the user interface.
// JavaScript is single-threaded, meaning it can only execute one task at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await.

console.log('Start');

// Simulating an asynchronous operation using setTimeout
setTimeout(function () {
    console.log('This is an asynchronous operation');
}, 2000); // This will execute after 2 seconds


setTimeout(() => {
    console.log('This is another asynchronous operation');
}, 1000); // This will execute after 1 second
console.log('End');

// Output:
// Start
// End
// This is another asynchronous operation
// This is an asynchronous operation

// Callbacks are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous operations to handle the result of an operation once it is completed.

function fetchData(callback) {
    // Fetching data from an API/Server or performing some asynchronous operation
    setTimeout(() => {
        console.log('\nData Fetched!');
        const data = 'Sample Data';
        callback(data);
    }, 2000);
}

function processData(data) {
    console.log('Processing Data: ' + data);
}

function modifyData(data) {
    console.log('Modifying Data: ' + data);
}

fetchData(processData); // Passing processData as a callback function
fetchData(modifyData); // Passing modifyData as a callback function
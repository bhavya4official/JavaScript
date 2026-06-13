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
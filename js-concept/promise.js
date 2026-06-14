// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner.
function fetchData(callback) {
    // Fetching data from Server - Resolve / Pending / Reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('\nData Fetched!');
            const data = 'Sample Data';
            resolve(data); // Resolving the promise with the fetched data
            reject('Error fetching data'); // Rejecting the promise with an error message
        }, 2000);
    });
};

// Using .then() to handle the resolved value of the promise and .catch() to handle any errors that may occur during the asynchronous operation.
fetchData().then(function (data) { // inside function will execute only when promise is resolved
    console.log('Processing Data: ' + data); 
});

const data = await fetchData();
console.log('Processing Data: ' + data);


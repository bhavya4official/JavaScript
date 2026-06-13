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

fetchData().then(function (data) {
    console.log('Processing Data: ' + data);
});

const data = await fetchData();
console.log('Processing Data: ' + data);


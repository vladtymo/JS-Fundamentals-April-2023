// -------------- asynchronous --------------

console.log('Start!');

setTimeout(() => {
    let result = '*';
    for (let i = 0; i < 10; i++) {
        result += '*';
    }
    console.log(result);
}, 2000); // start operation in 2 seconds

console.log('Finish!');
//...

// ----------- Promises -----------
// promise states: pending -> fullfiled / rejected
// create promise syntax: new Promise(resolve, reject);

const hardOperation = new Promise((resolve, reject) => {
    // do some work...
    console.log("Preparing for hard work...");
    console.log("Doing hard work...");

    setTimeout(() => {
        if (Math.random() < 0.5)
            // finish the promise successfully
            resolve({ number: Math.pow(2, 16) });
        else
            // finish the promise with error
            reject(new Error("My custom error!"));
    }, 3000);
});

// .then() - handle promise result
hardOperation
    .then((result) => {
        console.log("Promise finished successfully! Result:", result.number);
    })
    .catch((error) => {
        console.error("Some error:", error.message);
    });


// ----------- function with Promise
// ----- in synchronous way
// function getUserFromDatabase(ip) {
//     if (ip != '127.0.0.1')
//         throw new Error("Database IP is incorrect");
//     else {
//         setTimeout(() => {
//             // return user from the database
//             const id = Math.floor(Math.random() * 1000);
//             return { id, email: 'test.user@gmail.com' };
//         }, 1500);
//     }
// }

// ----- in asynchronous way
function getUserFromDatabase(ip) {
    return new Promise((resolve, reject) => {
        if (ip != '127.0.0.1')
            reject(new Error("Database IP is incorrect"));
        else {
            setTimeout(() => {
                // return user from the database
                const id = Math.floor(Math.random() * 1000);
                resolve({ id, email: 'test.user@gmail.com' });
            }, 1500);
        }
    });
}

getUserFromDatabase("127.0.0.1").then(user => {
    console.log(user);
}, err => console.error(err.message));

getUserFromDatabase("127.0.0.777")
    .then(user => console.log(user))
    .catch(err => console.error(err.message));

// ------------- get from API
// fetch() - send HTTP request and get a server response
fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        console.log("Respose status:", result.status);
        return result.json(); // get object from JSON
    })
    .then(data => console.log(data));

// ------------------------ async / await ------------------------
// introduced in ES8
// [await] - wait the promise asynhronously
// [async] - allows to use await operator in function 

async function getPostFromServer(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    // fetch(url).then(res => res.json()).then(post => {
    //     postBlock.innerHTML = `<h3>${post.title}</h3>
    //                            <p>${post.body}</p>`;
    // });

    const response = await fetch(url);
    // next
    console.log("Status:", response.status);
    const post = await response.json();
    // next
    postBlock.innerHTML = `<h3>${post.title}</h3>
                            <p>${post.body}</p>`;
}

getPostFromServer(5);

console.log('-> Continue! ->');
// other logic...

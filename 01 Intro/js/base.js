// -------------- data types --------------

let price = 120.5;              // number
let count = 10000000000n;       // BigInt
let email = 'vladnaz@ukr.net';  // string
let valid = true;               // boolean
let password;                   // undefined
let age = null;                 // null

console.log("My email: " + email + "!!!");
// interpolation: `...${expression}...`
console.log(`My email: ${email}!!!`);

console.log(`Price: ${price}, type: ${typeof (price)}`);
console.log(`Count: ${count}, type: ${typeof (count)}`);
console.log(`Email: ${email}, type: ${typeof (email)}`);
console.log(`Valid: ${valid}, type: ${typeof (valid)}`);
console.log(`Password: ${password}, type: ${typeof (password)}`);
console.log(`Age: ${age}, type: ${typeof (age)}`);

// constants
const PI = 3.14;
//PI = 2.10; // error

// -------------- browser dialogs --------------
// show message to the client
alert("Hello JavaScript!");

// request the value from the client
// return string or null of user Cancel the dialog
let username = prompt("Enter your username:");
console.log(`Hello, dear ${username}!`);

// operator + for converting string to number: +{string value}
let year = +prompt("Enter current year:");
console.log(`Next year will be ${+year + 1}`);

let isContinue = confirm("Do you want to continue?");
console.log("Continue: " + isContinue);
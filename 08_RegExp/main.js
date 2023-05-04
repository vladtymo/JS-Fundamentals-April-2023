// ----------- working with RegEx

//let regex = new RegExp('pattern');
let regex = /[A-Z]\-\d{2}/; // D-45 J-89

// RegEx.exec(), RegEx.test() 

let text = null;
do {

    text = prompt("Enter text:");

    if (regex.test(text))
        console.log(regex.exec(text));
    else
        console.warn("Invalid format!");

} while (text != 'exit');

// ------ flags:
/*
    g - global
    i - case insensitive
    m - multiline
*/

regex = /[A-Z]{3}/g;

let str = prompt("Enter long text:");

// string.match(), string.replace()
console.log("Index of match:", str.match(regex));

console.log("Replaced:", str.replace(regex, "!!!"));

// string.split()
regex = /[.,-\s]{1,3}/;
str = prompt("Enter a line:");
console.log("Split:", str.split(regex));

// TASK: check email address
const email = prompt("Enter email address:");

let emailRegEx = /^[\w\.\-]{3,}@\w+\.\w+$/; // 'vladtymo@gmail.com'

console.log(`Email addres is ${emailRegEx.test(email) ? "valid" : "invalid"}`);
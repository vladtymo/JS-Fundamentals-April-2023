// -=-=-=-=-=-=- Functions -=-=-=-=-=-=-

// function declaration: function name(parameters) { ...body... }

function greeting() {
    console.log('Hello everyone!');
}

// function invokation: name(values);
greeting();

function showArea(width, heigth) {
    console.log("Rectange area: ", width * heigth);
}

showArea(10, 5);
showArea(1, 20);
showArea(0, 0);

function showRandomNumber(min = 1, max = 10) {

    let value = min + Math.random() * (max - min);
    let integer = Math.floor(value);
    console.log(integer); // 0...max
}

showRandomNumber(10, 20);
showRandomNumber(90, 100);
showRandomNumber(3); // 3...10
showRandomNumber(); // 1...10

let res = showRandomNumber(); // return undefined
console.log(res);

// return operator - повертає значення з функції
function getSumm(a, b) {
    return a + b;
}
console.log('Result:', getSumm(4, 7));
alert('Result: ' + getSumm(4, 7))

// function expression: function() { ...body... }
const summ = function (a, b) {
    console.log(`Result: ${a + b}`);
};
// arrow functions: () => { }
const mult = (a, b) => {
    console.log(`Result: ${a + b}`);
};

console.log('Type of summ: ', typeof (summ));
summ(3, 6);

// anonymous function usage
function changeArray(array, modify) {

    for (let i = 0; i < array.length; ++i) {
        array[i] = modify(array[i]);
    }
}

let arr1 = [1, 4, 6, 2];
let arr2 = [4, 10, 3, 0];

function increment(n) {
    return n + 1;
}

changeArray(arr1, increment);                   // usign declared function
changeArray(arr1, function (n) { return n + 1 }); // using expression
changeArray(arr2, (n) => n - 1);                // using arrow

console.log('arr 1 changed:', arr1);
console.log('arr 2 changed:', arr2);
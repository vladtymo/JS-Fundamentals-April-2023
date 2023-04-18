// -=-=-=-=-=-=-=- Loops -=-=-=-=-=-=-=-

// while - цикл з передумовою
// syntax: while(condition) { ...code... }

// вічний цикл: цикл, в якого умова завжди = true

let a = 1; // initialize

while (a < 10) { // condition
    // iteration
    console.log(`[${a}] - One more iteration...`);
    ++a; // expression
}

console.warn("Finish!");

// ідентичне виконання за допомогою циклу for

// for(initialize; condition; expression) { ...code... }
for (let i = 1; i < 10; ++i) {
    console.log(`[${i}] - One more iteration...`);
}

console.log(`a = ${a}`); // 10
//console.log(i); // is not defined
//console.log(-+prompt("Enter your number:"));

// виконати цикл, до поки користувач введе позитивне число
// while (+prompt("Enter your number:") > 0) {
//     console.log('Great!');
// }

// do while(): цикл з післяумовою
// syntax: do while() { ...code... }

// запросити введення числа, поки воно не буде позитивним
// let number;
// do {
//     number = +prompt("Enter a positive number:");
// } while (number < 0);

// for in - iterate all object keys
// syntax: for (variable in object) {}
let array = [4, 6, 2, 6, -8, 0, 85, 120, 3];
let user = {
    username: 'bob228',
    address: 'Rivne, Ukraine',
    id: 22
};

console.log('Array indexes:');
for (let ind in array) {
    console.log(`Key: ${ind}`); // 0...8
}

console.log('User properties:');
for (const prop in user) {
    console.log(prop);
}

console.log('Array values:');

let newArr = [];

// for of - iterate all values of the object
for (let elem of array) {
    ++elem; // change copy, do not effect to original array
    console.log(`Element: ${elem}`);
}
// show array
console.log(array);

let prices = [];
// додати в масив 10 цін з випадковим значенням від 0 до 100

for (let i = 0; i < 10; ++i) {
    let value = Math.floor(Math.random() * 100);
    prices.push(value); // [0..100)
}

for (const price of prices) {
    console.log(`Price: ${price}$`);
}

// get summ of all prices in the array
let summa = 0;
for (let i = 0; i < prices.length; ++i) {
    summa += prices[i];
}
console.log(`Total price: ${summa}$`);

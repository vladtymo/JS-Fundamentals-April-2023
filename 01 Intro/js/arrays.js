// -=-=-=-=-=-=-=-=- Arrays -=-=-=-=-=-=-=-=-
// -------- create array using Array()
var array = new Array(10); // 10 undefined items

// set value by index
array[0] = 100;
array[1] = 200;
array[2] = 300;

console.log("Array length:", array.length);
console.log("Array values: " + array);

// -------- create array using []
var array = []; // empty array
var array = [4, 6, 123, 1, 604, -4, 0, 123, 44]; // 9

console.log("Array: " + array);
console.log("Last item: " + array[array.length - 1]);

array[20] = 777; // change value by index
console.log("Element 20: " + array[20]);
console.log("Array length:", array.length);

// -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-
console.log("Original Array: ", array);

array.push(777); // add element to the end
console.log("Array:", array);

array.pop(); // remove the last element
console.log("Array:", array);

array.shift(); // remove the first element
console.log("Array:", array);

array.unshift(555); // add to the beginning
console.log("Array:", array);

console.log("Index of first 123:", array.indexOf(123));    // find the index of the element by the value (if not found: -1)
console.log("Index of last 123:", array.lastIndexOf(123)); // starts from the end

console.log("Found:", array.find((elem) => elem < 0)); // find the value by the condition

array.sort(); // sort with a default logic
console.log("Sorted by default:", array);

// compare result:
// 0 - items are equals
// <0 - less
// >0 - bigger
array.sort((a, b) => a - b); // sort with a custom logic
console.log("Sorted with custom func:", array);

array.splice(2, 3); // remove the {3} elements from the {2} index
console.log("After remove:", array);

const copy = array.slice(1, array.length - 1); // create a copy of the array from {1} to {length-1}
console.log("Copied array:", copy);

array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

const filtered = array.filter((el) => el % 2 == 0); // filter element by the condition
console.log("Filtered array:", filtered);

console.log("Reversed: ", array.reverse());

const colors = ['red', 'brown', 'green', 'gold', 'silver'];

const str = colors.join(" - "); // join the array elements into a single string
console.log("Str after join: ", str);

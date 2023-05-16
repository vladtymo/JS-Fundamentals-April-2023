// --------------- collection in JS ---------------
let array = [1, 2, 3]; // array
// access items by index
array[2] = 10;

// -------- [Set] collection
// ! store unique elements
let codes = new Set([55, 77, 91]);

codes.add(20);
codes.add(55); // ignore

if (codes.has(91))
    codes.delete(91);

for (const i of codes) {
    console.log(i);
}

codes.clear(); // clear all elements

// -------- [Map] collection
// ! stores each item as pair: key, value

let cars = new Map();

// access items by keys
cars.set("AA4539BK", { model: "BMW X5", year: 2016 });
cars.set("|777|", { model: "Cadilac", year: 2023 });
cars.set("BC3422AA", { model: "Toyota Camry", year: 2013 });

const deleted = cars.delete("TT33TT");
console.log(`Car ${deleted ? "deleted" : "does not exist"}`);

console.log("Car:", cars.get('|777|'));

for (const key of cars.keys()) {
    console.log(key);
}
for (const val of cars.values()) {
    console.log(val);
}
for (const pair of cars) { // cars.entries()

    // pair[0] - element key
    // pair[1] - element value
    //const [key, value] = pair;

    console.log(pair);
}

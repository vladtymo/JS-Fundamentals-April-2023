// -------------- classes --------------
// class = object prototype

class Car {
    // private fileds (can access only inside this class): #name
    #speed;
    // static - create once, it's common for all Car instances
    static count = 0; // count of Car instance

    // initialize the object with initial values
    constructor(model, color, power, year) {
        // create properties
        this.model = model;
        this.color = color ?? "no color";
        this.power = power;
        this.year = year;
        this.#speed = 0;
        // add new instance
        ++Car.count;
    }
    // methods
    show() {
        document.write(`<p>Car: ${this.model} ${this.color} ${this.power}hp</p>`);
    }

    static getCount() {
        // cannot use this in the static methods
        return Car.count;
    }
    static paint(car, color) {
        car.color = color;
    }

    // getter / setter

    // getMiles() {
    // }
    // setSpeed(value) {
    // }

    get miles() {
        return (this.#speed * 0.621371).toFixed(1);
    }
    set speed(value) {
        // validation
        if (value >= 0 && value < 220)
            this.#speed = value;
        else console.warn("Invalid speed!");
    }
}

console.log("Car instances:", Car.getCount());

// create instance: new Type(params);
let hisCar = new Car("Audi A8", "Red", 240, 2012); // invoke constructors
let herCar = new Car("Nissan Tiida", null, 106, 2017);

// set
//hisCar.speed = -10;   // bad practice, use methods instead
hisCar.speed = 67;      // hisCar.setSpeed(67);
// ignore
hisCar.speed = -300;    // hisCar.setSpeed(-300); 
//hisCar.#speed = 550;  // private 

// get
//console.log(`Speed: ${hisCar.getMiles()} miles`);
console.log(`Speed: ${hisCar.miles} miles`);

hisCar.show();
herCar.show();

// -------------- inheritance --------------
class PoliceCar extends Car {
    // this class already has all Car member
    // we can add additional members

    // super - reference to the parent object
    constructor(model, color, power, year, volume) {
        // invoke base constructor
        super(model, color, power, year);

        this.volume = volume >= 0 ? volume : 0;
    }

    beep() {
        console.log(`Beep... Beeeeeep${'!'.repeat(this.volume)} Stop!`);
    }

    // override the base method
    show() {
        document.write(`<h4>Police Car</h4>`);
        super.show(); // invoke base show() method
    }
}

const policeCar = new PoliceCar('Toyota Prius', 'White', 145, 2016, 5);
policeCar.beep();
policeCar.show();

console.log("Car instances:", Car.count);

Car.paint(hisCar, "yellow");
hisCar.show();

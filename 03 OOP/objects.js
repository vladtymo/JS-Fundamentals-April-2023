// ------------ objects ------------
/* object contains:
     - properties (data)
     - methods (behaviour)
*/

let username = "vladtymo";
let email = "vlad11@gmail.com";
let address = "Rivne, Ukraine";
let isAdmin = true;
let birthdate = new Date(1990, 0, 10);

function showUserProps(username, email, address, isAdmin /*...*/) {
    console.log(`User [${username}]: ${email}, status: ${isAdmin ? 'Admin' : 'User'}`);
}

showUserProps(username, email, address);

// ------- create object
var object = new Object();
var object = {};

let me = {
    // properties: name: value
    username: "vladtymo",
    email: "vlad11@gmail.com",
    address: "Rivne, Ukraine",
    isAdmin: true,
    birthdate: new Date(1990, 0, 10)
};

// access to properties
// 1 - object.property
// 2 - object["property"]

console.log("User address:", me.address);
console.log("User address:", me["address"]);

// change property
me["username"] = "vladtm";
me.isAdmin = false;

// add new property
//me["full name"] = "Vlad Tymoshchuk"; // we can use spaces
me.fullName = "Vlad Tymoshchuk";       // we cannot use spaces
me.salary = 1400.50;

// delete property
delete me.address;

// check if object has property by name
if (me.hasOwnProperty("salary"))
    console.log(`User salary: ${me.salary}$`);
else
    console.warn("User has not a salary!");

// get all object properties
for (const key in me) {
    console.log(`[${key}]: ${me[key]}`);
}

function showUserObject(user) {
    console.log(`User [${user.username}]: ${user.email}, status: ${user.isAdmin ? 'Admin' : 'User'}`);
}

showUserObject(me);

// ------------- methods -------------
let myCar = {
    model: 'Tesla Model X',
    price: 79000,
    color: 'Black',
    speed: 55,
    // inner object
    driver: {
        firstName: 'Oleg',
        lastName: 'Shumaher'
    },
    // inner array
    fines: [120, 450, 1300, 450],
    // methods
    show: function () {
        // this - reference to object depends on the context
        console.log(`Car: ${this.model} ${this.color}, price: ${this.price}$`);
    },
    showDriver() {
        console.log(`Driver of ${this.model} car is ${this.driver.firstName} ${this.driver.lastName}`);
    },
    getTotalFines() {
        let summ = 0;
        for (const f of this.fines) {
            summ += f;
        }
        return summ;
    }
};

myCar.show();
myCar.showDriver();
console.log(`Total fines: ${myCar.getTotalFines()} UAH`);

// ------------ function constructors
function Account(login, password) {
    // create properties
    this.login = login;
    this.password = password;
    this.isAdmin = false;
    this.show = function () {
        console.log(`Account: ${this.login}`);
    }
};

const baseAccount = new Account("super1122", "Qwerty");
const otherAccount = new Account("bob99", "TestTest");

baseAccount.show();
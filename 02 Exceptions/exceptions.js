// --------------- Exception Handling ---------------

// --------------------------------------------------
// handle exception by using statement: try {} catch {}
try {
    // do some code...

    let a = 30;
    //a.sort();       // TypeError
    //a += b;         // ReferenceError 
    //eval('ler a;'); // SyntaxError
    ///a.toFixed(-1); // RangeError

    // if an exception is occured go to catch block
    // try block is stops

    console.log("Result:", a);

} catch (error) {
    // error - contains exception property: name, message, stack
    console.warn('Exception occured!');
    console.log("Exception name:", error.name);         // exception type
    console.log("Exception message:", error.message);   // decription
    console.log("Exception stack:", error.stack);       // where is occured
}

console.log('Continue! Do another work...');

// --------------------------------------------------
// throw user-defined exceptions: throw object();
function removeItem(array, index) {
    // if index is out of range
    if (index >= array.length || index < 0)
        throw new RangeError(`Index is out of range [${0}...${array.length - 1}]`);

    array.splice(index, 1);
}

const colors = ['red', 'yellow', 'orange', 'green', 'gray', 'black'];

try {
    console.log("Colors:", colors);
    //let index = +prompt("Enter color index to remove:", 0);
    removeItem(colors, -1);

} catch (error) {
    console.log("Error message:", error.message);
}

console.log("After removing:", colors);

// --------------------------------------------------
// + finally {} block
function getDataFromDB() {
    if (Math.random() < 0.5) return { id: 1003, username: 'vladtymo' }; // object with id, name property
    else
        throw new Error('Your record was not found!');
}

try {
    console.log("Connect to the database!");
    const user = getDataFromDB();   // may occure an exception
    console.log(`Found user [${user.id}]: ${user.username}`);

    // disconnect
} catch (error) {
    console.log("Message:", error.message);

} finally {
    // executes both when the code runs successfully or if an error occurs
    console.log("Disconnect from the database!");
}
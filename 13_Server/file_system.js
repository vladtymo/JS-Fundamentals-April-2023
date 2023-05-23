// fs - module to handle the file system
const fs = require('fs');

const content = "File content which written by using Node.js fs module!";

// params: path, content, callback
fs.writeFile("data.txt", content, (err) => {
    if (err)
        console.log(err.message);
    else
        console.log("Content was writren successfully!");
});

fs.readFile("data.txt", "UTF-8", (err, data) => {
    if (err)
        console.log(err.message);
    else
        console.log("File content:", data);
});
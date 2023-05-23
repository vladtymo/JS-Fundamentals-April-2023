// server logic

const express = require('express'),
    app = express();

const hostname = 'localhost';
const port = 3600;

// create endpoint - method to handle client request

// GET: ~/api/users
app.get("/api/users?", (req, res) => {
    res.status(200).type('text').send("List of users!");
});
// GET: ~/api/contacts
app.get("/api/contacts", (req, res) => {
    res.status(200).type('text').send("List of contacts!");
});
// POST: ~/api/users/vlad/tymo
app.post("/api/users/:name/:surname", (req, res) => {
    // req.params - get route parameters value

    const name = req.params.name;
    const surname = req.params.surname;
    res.status(200).type('text').send(`User ${name} ${surname} was created! (route params)`);
});
app.post("/api/users", (req, res) => {
    // req.query - get query parameters value

    const name = req.query.name;
    const surname = req.query.surname;
    res.status(200).type('text').send(`User ${name} ${surname} was created! (query params)`);
});
app.get('/api/users/random', (req, res) => {
    res.status(200).type('json');
    res.json({
        id: 1,
        name: 'Bob',
        surname: 'Arum',
        age: 90
    });
});

app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
});

app.listen(port, hostname, () => {
    console.log(`Server is listening http://${hostname}:${port}`);
});

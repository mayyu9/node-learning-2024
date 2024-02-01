const express = require('express');

const app = express();

const port  = 8000;

// middle ware
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method}: ${req.url}`);
    next(); // this will process the req futher if any exists. or to the respected url.
})

app.get('/', (req, res) => {
    return res.json({message: 'Hello from express server.'})
})

app.get('/users', (req, res) => {
    return res.json({ users: ['A', 'B', ' C', 'D']})
})

app.post('/users', (req, res) => {
    return res.json({message: 'Thanks for signup'})
})

// path parameters support

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    return res.json({message: `Id is ${id}`})
})

app.listen(port, () => console.log('Express app started on server 8000'))
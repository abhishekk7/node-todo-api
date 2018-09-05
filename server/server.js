const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const port = 8001;

let app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save((err, todo) => {
        if (err) {
            res.status(400).send(err);
        }
        res.send(todo);
    });
});

app.get('/todos', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            res.status(400).send(err);
        }

        res.send({ todos });
    });
});

app.listen(port, () => {
    console.log('Started on port ', port);
});

module.exports = { app };
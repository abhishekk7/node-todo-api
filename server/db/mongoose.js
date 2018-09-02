const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', (err) => {
    if (err)
        return console.log('error connecting to mongodb', err);
    console.log('connected to mongodb');
});

module.exports = { mongoose }
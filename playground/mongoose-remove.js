const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove



Todo.findByIdAndRemove('5b99ea02442caacfc7d7b2f5').then((todo) => {
    console.log(todo);
});
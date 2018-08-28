const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something 3',
    //     completed: false
    // }, (err, result) => {
    //     if (err)
    //         return console.log('Unable to insert todo', err);
    //     console.log(JSON.stringify(result, null, 2));
    // });

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Something 2' }, (err, results) => {
    //     console.log(results);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Something 3'}, (err, result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ _id: new ObjectID("5b84ddc34c895b2aa95b50a6") }, (err, result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    client.close();
});
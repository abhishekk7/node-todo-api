const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5b84e07d4c895b2aa95b50b7') },
        {
            $set: {
                text: 'Eat Dinner'
            },
            $inc: {
                repeat: 3
            }
        },
        { returnOriginal: false },
        (err, result) => {
            if(err) 
                console.log('err', err);
            console.log(JSON.stringify(result, undefined, 2));
        });

    client.close();
});
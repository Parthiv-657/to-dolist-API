const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb)=>{
    mongoClient.connect(
        "mongodb+srv://parthiv:parthiv@joe-mama.wnc5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        { useUnifiedTopology: true }
    )
    .then(client => {
        _db = client.db();
        console.log('Connected!');
        cb();
    })
    .catch(err => {
        console.log(err);
    })
}

const getDb = ()=>{
    if(_db)
        return _db;
    throw 'No Database Found';
}

module.exports.mongoConnect = mongoConnect;

module.exports.getDb = getDb;
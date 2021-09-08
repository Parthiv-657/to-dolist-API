const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class Item{

    constructor(description, _id)
    {
        this._id = _id;
        this.description = description;
    }

    save(){
        const db = getDb();
        let dbOb;
        if(this._id){
            dbOb = db.collection('items').updateOne({_id : new ObjectId(this._id)}, {$set : {description : this.description}});
        } else {
            dbOb = db.collection('items').insertOne(this);
        }
        return dbOb
        .then(result => {
            ;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static fetchAll(){
        const db = getDb();
        return db.collection('items').find().toArray()
        .then(items => {
            // console.log(items);
            return items;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById(listId){
        const db = getDb();
        return db.collection('items').deleteOne({_id : new ObjectId(listId)})
        .then(result => {
            // console.log('Deleted Successfully !');
        })
        .catch(err => {
            console.log(err);
        });
    }

    static deleteAll()
    {
        const db = getDb();
        return db.collection('items').deleteMany({})
        .then(result => {
            // console.log('Deleted ALL Items');
        })
        .catch(err => {
            console.log(err);
        });
    }

}

module.exports = Item;
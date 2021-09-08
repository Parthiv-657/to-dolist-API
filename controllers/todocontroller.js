const getDb = require('../util/database').getDb;

const Item = require('../models/item');

module.exports.getList = (req, res, next) => {
    Item.fetchAll()
    .then(items => {
        res.status(200).json(items);
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports.postItem = (req, res, next) => {
    // console.log(req.body);
    const item = new Item(req.body.description, undefined);
    return item.save()
    .then(result => {
        console.log('Item Created !');
        res.redirect('/');
    }) 
    .catch(err => {
        console.log(err);
    });
}

module.exports.updateItem = (req, res, next) => {
    const item = new Item(req.body.description ,req.params.itemId);
    return item.save()
    .then(result => {
        console.log('Item Updated !');
        res.redirect('/');
    }) 
    .catch(err => {
        console.log(err);
    });
}

module.exports.deleteItem = (req, res, next) => {
    const db = getDb();
    Item.deleteById(req.params.itemId)
    .then(result => {
        console.log('Deleted Item !');
        res.redirect('/');
    }) 
    .catch(err => {
        console.log(err);
    });
}
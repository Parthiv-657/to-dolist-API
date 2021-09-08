const express = require('express');
const todoController = require('./../controllers/todocontroller');

const router = express.Router();

router.get('/', todoController.getList);

router.post('/postItem', todoController.postItem);

router.post('/updateItem/:itemId', todoController.updateItem);

router.delete('/deleteItem/:itemId', todoController.deleteItem);

module.exports = router;
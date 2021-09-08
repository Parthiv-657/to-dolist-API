const mongodb = require('mongodb');
const mongoConnect = require('./util/database').mongoConnect;

const express = require('express');
const bp = require('body-parser')

const router = require('./routes/todolist');

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(router);

mongoConnect(()=>{
    app.listen(8000);
});

// app.listen(8000);
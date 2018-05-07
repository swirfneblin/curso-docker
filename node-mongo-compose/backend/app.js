const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

server.get('/', (req, res, next) => res.send('Backend'));
server.get('/teste', (req, res, next) => res.send('teste!!'));

// start server
server.listen(3000);
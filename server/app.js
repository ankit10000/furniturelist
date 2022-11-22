const dotenv = require('dotenv');
const express = require('express');
const  mongoose = require('mongoose');

const app= express();

dotenv.config({path: './config.env'});
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

const middleware = (req, res, next) =>{
    console.log('hello middleware')
    next();
}

app.listen(PORT, () =>{
    console.log('hello server')
})
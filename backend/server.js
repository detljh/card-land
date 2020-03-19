'use strict';

require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const env = process.env.NODE_ENV || 'production';
let config = {
  db: process.env.DATABASE,
  port: 3000
}
if (env != 'production') {
  config = require('./config.js')[env];
}

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.route('/')
  .get((req, res) => {
    res.send('BACKEND CONNECTED');
  });

app.use((req, res, next) => {
    res.status(404)
        .type('text')
        .send('Not Found');
    });

app.listen(process.env.PORT || config.port, () => {
    console.log("Listening on port..." + (process.env.PORT || config.port));
    
    if (process.env.NODE_ENV === 'test') {
        console.log("Running Tests...");
    }
});

module.export = app;
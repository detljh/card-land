'use strict';

require('dotenv').config();
const path = require('path');
const fs = require('fs')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');

const env = process.env.NODE_ENV || 'production';
let config = {
  db: process.env.DATABASE,
  port: 3000
}
if (env != 'production') {
  config = require('./config/config.js')[env];
}

const models_path = path.join(__dirname, '/models');
fs.readdirSync(models_path).forEach(file => {
  require(models_path + '/' + file);
})

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.use(passport.initialize());
require('./config/auth')(passport);

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

app.route('/')
  .get((req, res) => {
    res.send('BACKEND CONNECTED');
  });
  
const authRoutes = require('./routes/api/auth');
authRoutes(app);

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
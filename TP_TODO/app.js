require('dotenv').config(); 

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = require('./routes');

const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error connecting to MongoDB:', error));

app.set('view engine', 'ejs');
app.use(router);
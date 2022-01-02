const express = require('express');
const mongoose = require('mongoose');

const CurrentBalance = require('./app/infrastructure/models/currentBalanceModel');
const profitLoss = require('./app/infrastructure/models/profitLossModel');

const currentBalanceRoutes = require('./routes/currentBalance');
const profitLossRoutes = require('./routes/profitLoss');

const app = express();

mongoose.connect('mongodb+srv://user01:Iyf98UbRB6jrvzrL@cluster0.b4l1p.mongodb.net/sample_thing?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


/**
 * MIDDLEWARE
 */
/* CORS */
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
/* CORS END */

app.use(express.json());

/* currentBalance */
app.use('/api/currentBalance', currentBalanceRoutes);
/* profitLoss */
app.use('/api/profitLoss', profitLossRoutes);


/**
 * MIDDLEWARE END
 */

module.exports = app;


/*
MongoDB
user01
Iyf98UbRB6jrvzrL
 */
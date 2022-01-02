const express = require('express');
const mongoose = require('mongoose');

const CurrentBalance = require('./app/infrastructure/models/currentBalanceModel');
const profitLoss = require('./app/infrastructure/models/profitLossModel');

const currentBalanceRoutes = require('./routes/currentBalance');
const profitLossRoutes = require('./routes/profitLoss');
const userRoutes = require('./routes/user');

const mongodbAccess = require('./config/database');

const app = express();

mongoose.connect('mongodb+srv://' + mongodbAccess.USER + ':' + mongodbAccess.PASSWORD + '@' + mongodbAccess.CLUSTER + '/sample_thing?retryWrites=true&w=majority',
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

/**
 * AUTHENTICATION
 */
app.use('/api/auth', userRoutes);


/* currentBalance */
app.use('/api/currentBalance', currentBalanceRoutes);
/* profitLoss */
app.use('/api/profitLoss', profitLossRoutes);


/**
 * MIDDLEWARE END
 */

module.exports = app;

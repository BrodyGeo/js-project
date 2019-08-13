// Our Express app module
const express = require('express');
const app = express();

const beerRoutes = require('./routes/beers.js');
const vendorRoutes = require('./routes/vendors.js');

app.use('/beers', beerRoutes);
app.use('/vendors', vendorRoutes);

// Exporting the changes
module.exports = app;
const express = require('express');
const productRoutes= require('./api/route/products')


const app = express(); 
app.use('/products', productRoutes)

module.exports = app
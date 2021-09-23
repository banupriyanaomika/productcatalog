const express = require('express');

const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRoute');

const app = express();

// using JSON for requests and response.
app.use(express.json());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/categories', categoryRouter);

module.exports = app;
